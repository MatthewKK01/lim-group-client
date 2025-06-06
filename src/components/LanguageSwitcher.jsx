'use client';

import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ka' : 'en';
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="lang btn btn-outline-secondary btn-sm d-flex align-items-center gap-1"    >
      {/* Example icons: you can replace them with SVGs or icon libraries */}
      <i className="bi bi-translate"></i>
      <span>{locale === 'en' ? 'EN' : 'KA'}</span>
    </button>
  );
};

export default LanguageSwitcher;
