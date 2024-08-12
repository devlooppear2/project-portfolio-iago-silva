import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LanguageIcon from '../../assets/svg/language/language-icon.svg';
import { useTranslation } from 'react-i18next';
import Loader from './Loader';

function NavBar() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [location]);

  const handleNavigation = (to : any) => {
    setIsLoading(true);
    navigate(to);
  };

  return (
    <>
      {isLoading && <Loader />}
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link
            className="navbar-brand logo-nav-bar"
            to="/"
            onClick={() => handleNavigation('/')}
          >
            {t('iagoSilva')}
          </Link>
          <div className="d-flex">
            <div className="container-nav-pages row">
              <div className="col nav-bar-pages">
                <Link
                  to="/technologies"
                  onClick={() => handleNavigation('/technologies')}
                >
                  {t('technologies')}
                </Link>
              </div>
              <div className="col nav-bar-pages">
                <Link
                  to="/projects"
                  onClick={() => handleNavigation('/projects')}
                >
                  {t('projects')}
                </Link>
              </div>
            </div>
            <div className="language-icon me-3">
              <Link to="/languages" title={t('language')}>
                <img src={LanguageIcon} alt="language-icon" />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex={-1}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header border-b border-green-600">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                <strong>Menu</strong>
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li
                  className={`nav-item border-b border-gray-400 my-1 hover:shadow hover:shadow-white hover:rounded-2 ${
                    location.pathname === '/' ? 'bg-green-800 rounded-1' : ''
                  }`}
                >
                  <Link
                    className="nav-link font-semibold ml-3 text-gray-200"
                    to="/"
                    onClick={() => handleNavigation('/')}
                  >
                    Home
                  </Link>
                </li>
                <li
                  className={`nav-item border-b border-gray-400 my-1 hover:shadow hover:shadow-white hover:rounded-2 ${
                    location.pathname === '/technologies'
                      ? 'bg-green-800 rounded-1'
                      : ''
                  }`}
                >
                  <Link
                    className="nav-link font-semibold ml-3 text-gray-200"
                    to="/technologies"
                    onClick={() => handleNavigation('/technologies')}
                  >
                    {t('technologies')}
                  </Link>
                </li>
                <li
                  className={`nav-item border-b border-gray-400 my-1 hover:shadow hover:shadow-white hover:rounded-2 ${
                    location.pathname === '/projects'
                      ? 'bg-green-800 rounded-1'
                      : ''
                  }`}
                >
                  <Link
                    className="nav-link font-semibold ml-3 text-gray-200"
                    to="/projects"
                    onClick={() => handleNavigation('/projects')}
                  >
                    {t('projects')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
