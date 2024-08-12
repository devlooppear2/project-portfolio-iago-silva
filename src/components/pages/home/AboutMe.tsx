import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Typed from 'typed.js';
import profileImg from '../../../assets/images/newProfileImage.jpeg';
import Loader from '../../common/Loader';

type Language = 'ptBR' | 'enUS';

function setupTyped(iAmAKeys: string[], t: any) {
  const iAmA = iAmAKeys.map((key) => t(key));

  const options = {
    strings: iAmA,
    typeSpeed: 60,
    backSpeed: 50,
    loop: true,
    backDelay: 2000,
  };

  return new Typed('.iAmA-options', options);
}

function getResumeLink(currentLanguage: Language) {
  switch (currentLanguage) {
    case 'ptBR':
      return 'https://docs.google.com/document/d/1Desxz1-kiZ5XyG1Ybv1T1mXoNrYlAAs93xGtkHpjtJM/edit';
    case 'enUS':
    default:
      return 'https://docs.google.com/document/d/1jN0tXjcwNHrSBNUbHx_JbmlECfEjKbY_3WI8kSGhH-8/edit';
  }
}

function AboutMe() {
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    (localStorage.getItem('selectedLanguage') as Language) || 'enUS',
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const iAmAKeys = ['developer', 'enthusiast', 'freelancer'];
    const typed = setupTyped(iAmAKeys, t);
    setLoading(false);

    return () => {
      typed.destroy();
    };
  }, [t]);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setCurrentLanguage(event.target.value as Language);
  };

  const linkResume = getResumeLink(currentLanguage);

  const checkAndHighlight = (word: string) => {
    const highlightedWords = [
      'Docker',
      'PHP',
      'Node.js',
      'Python',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Laravel',
      'SQL',
      'C#',
      'Java',
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Vite',
      'Tailwind',
      'Bootstrap',
      'Git',
      'GitHub',
      'Linux',
      'MacOS',
      'Windows',
      'Bitbucket',
    ];
    return highlightedWords.includes(word) ? (
      <span className="font-bold text-green-400">{word}</span>
    ) : (
      word
    );
  };

  return (
    <div>
      {loading && <Loader />}
      <div className="text-center pages-intro-title fs-2">
        <h1>
          <strong>{t('aboutMe')}</strong>
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="profile-image p-1 m-3">
              <img src={profileImg} alt="profile image" />
            </div>
          </div>
          <div className="col">
            <div className="about-me-content m-1 p-4 fs-3">
              <div>
                <h3>{t('greeting')}</h3>
                <h1>{t('name')}</h1>
                <h3>{t('profession')}</h3>
                <span className="iAmA-options about-content-typer"></span>
                <br />
              </div>
              <div className="mt-5">
                <div className="text-center mt-2">
                  <strong>{t('downloadMyResume')}</strong>
                </div>
                <button className="green-button">
                  <a
                    href={linkResume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>{t('download')} </strong>
                  </a>
                  <select
                    className="select-about-me"
                    value={currentLanguage}
                    onChange={handleLanguageChange}
                  >
                    <option value="ptBR">PT-BR</option>
                    <option value="enUS">En-US</option>
                  </select>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bar-to-divide"></div>
        <div className="mx-3 mt-5">
          <div className="fs-3 mb-4">
            <strong>{t('aboutMeTitle')}</strong>
          </div>
          <div className="about-me-text">
            <p className="mb-3">
              {t('aboutMeFirstParagraph')
                .split(' ')
                .map((word, index) => (
                  <React.Fragment key={index}>
                    {checkAndHighlight(word)}{' '}
                  </React.Fragment>
                ))}
            </p>
            <p className="mb-3">
              {t('aboutMeSecondParagraph')
                .split(' ')
                .map((word, index) => (
                  <React.Fragment key={index}>
                    {checkAndHighlight(word)}{' '}
                  </React.Fragment>
                ))}
            </p>
            <p className="mb-3">
              {t('aboutMeThirdParagraph')
                .split(' ')
                .map((word, index) => (
                  <React.Fragment key={index}>
                    {checkAndHighlight(word)}{' '}
                  </React.Fragment>
                ))}
            </p>
            <p className="mb-3">
              {t('aboutMeFourthFirstParagraph')
                .split(' ')
                .map((word, index) => (
                  <React.Fragment key={index}>
                    {checkAndHighlight(word)}{' '}
                  </React.Fragment>
                ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
