import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaDocker, FaJava } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import {
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiCsharp,
  SiDbeaver,
  SiInsomnia,
  SiPostman,
  SiBootstrap,
} from 'react-icons/si';
import { TbBrandTypescript } from 'react-icons/tb';
import { VscVscodeInsiders } from 'react-icons/vsc';
import Loader from '../../common/Loader';

const Technologies = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const icons = [
    { icon: <SiPhp style={{ fontSize: '100px' }} />, name: 'PHP' },
    { icon: <SiNodedotjs style={{ fontSize: '80px' }} />, name: 'Node.js' },
    { icon: <SiPython style={{ fontSize: '80px' }} />, name: 'Python' },
    { icon: <FaJava style={{ fontSize: '80px' }} />, name: 'Java' },
    { icon: <SiCsharp style={{ fontSize: '80px' }} />, name: 'C#' },
    { icon: <TbBrandTypescript style={{ fontSize: '80px' }} />, name: 'TypeScript' },
    { icon: <SiInsomnia style={{ fontSize: '80px' }} />, name: 'Insomnia' },
    { icon: <SiPostman style={{ fontSize: '80px' }} />, name: 'Postman' },
    { icon: <SiDbeaver style={{ fontSize: '79px' }} />, name: 'DBeaver' },
    { icon: <VscVscodeInsiders style={{ fontSize: '80px' }} />, name: 'VSCode' },
    { icon: <FaDocker style={{ fontSize: '80px' }} />, name: 'Docker' },
    { icon: <SiBootstrap style={{ fontSize: '80px' }} />, name: 'Bootstrap' },
    { icon: <RiTailwindCssFill style={{ fontSize: '80px' }} />, name: 'Tailwind CSS' }
  ];

  return (
    <div>
      {loading && <Loader />}
      <div className="main-container-pages">
        <div className="flex flex-col justify-center align-middle items-center text-center fs-2 font-semibold gap-2 mt-3">
          <h2 className='mb-2'>{t('technologies')}</h2>
          <div className='border-b border-[2px] border-green-500 rounded-md w-[250px] max-w-[90%]'></div>
        </div>
        <div>
          <div className="text-center fs-4 mt-4 mb-5 font-semibold">
            {t('programeLanguages')}
          </div>
          <div className="container mt-4 text-center">
            <div className="row row-cols-3">
              {icons.slice(0, 3).map((item, index) => (
                <div className="col d-flex flex-col justify-center align-items-center mb-5 cursor-pointer" key={index} title={item.name}>
                  {item.icon}
                  <div className='mt-3 font-semibold opacity-80'>{item.name}</div>
                </div>
              ))}
            </div>
            <div className="row row-cols-3 mt-4">
              {icons.slice(3, 6).map((item, index) => (
                <div className="col d-flex flex-col justify-center align-items-center mb-5 cursor-pointer" key={index} title={item.name}>
                  {item.icon}
                  <div className='mt-3 font-semibold opacity-80'>{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="text-center fs-4 mt-4 mb-5 font-semibold">{t('toolsUsed')}</div>
          <div className="container mt-4 text-center">
            <div className="row row-cols-3">
              {icons.slice(6, 9).map((item, index) => (
                <div className="col d-flex flex-col justify-center align-items-center mb-5 cursor-pointer" key={index} title={item.name}>
                  {item.icon}
                  <div className='mt-3 font-semibold opacity-80'>{item.name}</div>
                </div>
              ))}
            </div>
            <div className="row row-cols-3 mt-4">
              {icons.slice(9).map((item, index) => (
                <div className="col d-flex flex-col justify-center align-items-center mb-5 cursor-pointer" key={index} title={item.name}>
                  {item.icon}
                  <div className='mt-3 font-semibold opacity-80'>{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
