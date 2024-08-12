import { useTranslation } from 'react-i18next';
import ptBRJson from './translations/pt-BR.json';
import enUSJson from './translations/en-US.json';
import esEsJson from './translations/es-ES.json';
import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { languageOptions } from './static/constants';

let language = '';

const fetchUserLanguage = async () => {
  try {
    const response = await fetch('https://ipapi.co/json');
    const data = await response.json();
    const countryCode = data.country_code;

    switch (countryCode) {
      case 'BR':
        return 'ptBR';
      case 'US':
        return 'enUS';
      case 'ES':
        return 'esEs';
      default:
        return 'enUS';
    }
  } catch (error) {
    console.error('Error fetching user location:', error);
    return 'enUS';
  }
};

const languageFromLocalStorage = localStorage.getItem('selectedLanguage');

if (
  languageFromLocalStorage &&
  languageFromLocalStorage !== null &&
  languageFromLocalStorage.length > 0
) {
  language = languageFromLocalStorage;
} else {
  language =  await fetchUserLanguage();;
}

const initOptions: InitOptions = {
  fallbackLng: language,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    enUS: enUSJson,
    ptBR: ptBRJson,
    esEs: esEsJson,
  },
};

i18n.use(initReactI18next).init(initOptions);

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="language-switcher flex flex-col gap-1 text-center justify-center items-center align-middle pt-3 max-w-[500px] w-[90vw]">
      <div className="fs-3">
        <strong>
          <span>{t('selectYourLanguage')}</span>
        </strong>
      </div>
      <br />
      <div className="flex flex-col gap-3 max-w-[250px] w-[90%] justify-center align-middle text-center mb-5">
        {languageOptions.map((languageOption) => (
          <button
            className="btn btn-dark m-1 d-flex align-items-center justify-center border"
            key={languageOption.value}
            onClick={() => {
              localStorage.setItem('selectedLanguage', languageOption.value);
              i18n.changeLanguage(languageOption.value);
            }}
          >
            <span className="me-2">
              <strong>{languageOption.name}</strong>
            </span>
            {<languageOption.flag height={'20'} width={'30'} />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
