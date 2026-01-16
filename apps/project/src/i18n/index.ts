import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 导入语言包
import en from "./locales/en/translation.json";
import zh from "./locales/zh/translation.json";

i18n
  .use(LanguageDetector)          // 自动检测用户语言
  .use(initReactI18next)          // 绑定 React
  .init({
    fallbackLng: "en",            // 默认语言
    debug: false,                 // 开发时可设为 true 查看日志
    interpolation: {
      escapeValue: false,         // React 已防 XSS，无需转义
    },
    resources: {
      en: { translation: en },
      zh: { translation: zh },
    },
    detection: {
      order: ["localStorage", "navigator"], // 优先读 localStorage，再读浏览器语言
      caches: ["localStorage"],             // 切换语言后存入 localStorage
    },
  });

export default i18n;