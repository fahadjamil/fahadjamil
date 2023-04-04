import react from "react";
import { useTranslation, withTranslation, Trans } from 'react-i18next';

export const Topheader = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
    return (
        <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">


          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 text-secondary">{t('home')}</a></li>
            <li><a href="#" className="nav-link px-2 text-white">{t('features')}</a></li>
            <li><a href="#" className="nav-link px-2 text-white">{t('pricing')}</a></li>
            <li><a href="#" className="nav-link px-2 text-white">{t('faqs')}</a></li>
            <li><a href="#" className="nav-link px-2 text-white">{t('about')}</a></li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">{t('login')}</button>
            <button type="button" className="btn btn-warning">{t('signup')}</button>
            <button type="button" className="btn btn-outline-light me-2" onClick={() => changeLanguage('ar')}>
              ar
            </button>
            <button type="button" className="btn btn-outline-light me-2" onClick={() => changeLanguage('en')}>
              en
            </button>
          </div>
        </div>
      </div>
    </header>
    )
}