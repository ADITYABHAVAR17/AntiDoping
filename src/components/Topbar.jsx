// src/components/Topbar.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

function Topbar() {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="bg-white h-16 shadow-lg flex items-center justify-between px-4">
      <h2 className="text-xl font-semibold">{t('Welcome')}</h2>
      <div className="flex space-x-4">
      <button onClick={() => switchLanguage('en')} className="p-2 bg-red-500 text-white rounded">
          Sign Up
        </button>
        <button onClick={() => switchLanguage('en')} className="p-2 bg-blue-500 text-white rounded">
          English
        </button>
        <button onClick={() => switchLanguage('hi')} className="p-2 bg-green-500 text-white rounded">
          Hindi
        </button>
      </div>
    </div>
  );
}

export default Topbar;
