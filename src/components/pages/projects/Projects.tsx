import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGitHubRepositories } from '../../../hooks/useGitHub';
import {
  SiPhp,
  SiNodedotjs,
  SiPython,
  SiCsharp,
  SiVuedotjs,
  SiAngular,
} from 'react-icons/si';
import { FaCss3, FaJava } from 'react-icons/fa';
import { TbBrandTypescript } from 'react-icons/tb';
import { AiOutlineHtml5 } from 'react-icons/ai';
import Loader from '../../common/Loader';
import ArrowToSelect from '../../../assets/svg/common/arrow-to-select.svg';

const languageIcons = {
  PHP: <SiPhp className="text-2xl" />,
  JavaScript: <SiNodedotjs className="text-lg" />,
  Python: <SiPython className="text-lg" />,
  Java: <FaJava className="text-lg" />,
  'C#': <SiCsharp className="text-lg" />,
  TypeScript: <TbBrandTypescript className="text-lg" />,
  HTML: <AiOutlineHtml5 className="text-2xl" />,
  CSS: <FaCss3 className="text-base" />,
  Vue: <SiVuedotjs className="text-lg" />,
  Angular: <SiAngular className="text-lg" />,
};

const Projects = () => {
  const { t } = useTranslation();
  const username = 'devlooppear';
  const { repositories, loading, error } = useGitHubRepositories(username);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setShowOptions(false);
  };

  const renderLanguageOptions = () => {
    const languages = [
      '',
      'PHP',
      'JavaScript',
      'Python',
      'Java',
      'C#',
      'TypeScript',
      'HTML',
      'CSS',
      'Vue',
      'Angular',
    ];
    return languages.map((language) => (
      <div
        key={language}
        className="cursor-pointer px-3 py-1 hover:bg-gray-100 hover:text-black"
        onClick={() => handleLanguageChange(language)}
      >
        {language ? language : t('allLanguages')}
      </div>
    ));
  };

  const filteredRepositories = selectedLanguage
    ? repositories?.filter((repo) => repo.language === selectedLanguage)
    : repositories;

  return (
    <div className="main-container-pages">
      <div className="text-center text-2xl font-bold mb-4">{t('projects')}</div>

      <div className="projects-container">
        <div className="container">
          {loading && <Loader />}
          {error && <p>{error}</p>}
          <div className="relative bg-[#00000023] mb-3 px-2 py-1 border border-gray-300 rounded shadow-lg max-w-[230px] text-center">
            <div
              className="cursor-pointer flex flex-row gap-2 justify-center"
              onClick={() => setShowOptions(!showOptions)}
            >
              {t('filterByLanguage')}{' '}
              <img src={ArrowToSelect} alt="arrow-to-select" />
            </div>
            {showOptions && (
              <div className="absolute top-full left-0 bg-[#303030ea] border border-gray-300 rounded shadow-lg">
                {renderLanguageOptions()}
              </div>
            )}
          </div>
          {filteredRepositories && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
              {filteredRepositories.map((repo) => (
                <div
                  key={repo.id}
                  title={repo.description}
                  className="rounded shadow-lg shadow-white border border-white px-2 py-2 hover:bg-gray-500"
                >
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="flex flex-row gap-2 items-center space-x-2">
                      {repo.name}
                      {
                        languageIcons[
                          repo.language as keyof typeof languageIcons
                        ]
                      }
                    </div>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
