import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import "./App.css";

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-8">
      Home 组件
      {/* 切换语言 */}
      <p>{t("language")}: {t("change_language")}</p>
      <LanguageSwitcher />
    </div>
  );
};

export default App;