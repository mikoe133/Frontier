import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("zh")} className="mr-2">
        中文
      </button>
      <button onClick={() => changeLanguage("en")}>
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;