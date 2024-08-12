import { useTranslation } from 'react-i18next';
import { FaDiscord, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div className="card footer">
        <div className="card-header">{t('iagoSilva')}</div>
        <div className="card-body footer-card-body">
          <h5 className="card-title mt-1 font-semibold">{t('footerTitle')}</h5>
          <p className="card-text">{t('footerContent')}</p>
          <div className="container-network-links">
            <div className="row">
              <div className="col">
                <a
                  target="_blank"
                  href="https://discord.com/users/1041801570582528021"
                >
                  <FaDiscord style={{ fontSize: '38px' }} />
                </a>
              </div>
              <div className="col">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/iago-silva-42130b209/"
                >
                  <FaLinkedin style={{ fontSize: '38px' }} />
                </a>
              </div>
              <div className="col">
                <a
                  target="_blank"
                  href="https://www.instagram.com/devlooppear/"
                >
                  <FaInstagram style={{ fontSize: '38px' }} />
                </a>
              </div>
              <div className="col">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/5511945718620"
                >
                  <FaWhatsapp style={{ fontSize: '38px' }} />
                </a>
              </div>
              <div className="col">
                <a
                  target="_blank"
                  href="mailto:iago.profissional.developer@gmail.com"
                >
                  <MdEmail style={{ fontSize: '38px' }} />
                </a>
              </div>
            </div>
            <div className="row row-cols-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
