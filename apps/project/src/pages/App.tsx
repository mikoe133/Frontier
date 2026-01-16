
import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { Button } from "antd";
import { Button as MyButton } from "myworkspace-ui";
import { add } from "myworkspace-utils";


const App: React.FC = () => {
    const { t } = useTranslation();

    // 使用导入的 add 函数作为示例
    const result = add(2, 3);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex flex-col items-center justify-center p-4 md:p-8">
            <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-gray-200 dark:border-gray-700 pb-6">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                            {t("hello")}
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                            {t("description")}第二个包:{result}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                            onClick={() => {
                                console.log('Environment variables:', import.meta.env);
                                alert(`API Base URL: ${import.meta.env.VITE_API_BASE_URL}`);
                            }}
                            className="!bg-gray-800 !border-gray-800 hover:!bg-gray-900 text-white dark:!bg-gray-700 dark:hover:!bg-gray-600"
                            size="large"
                        >
                            {t("test_button") || "测试按钮"}
                        </Button>
                        <MyButton className="!bg-white !border-gray-300 !text-gray-800 hover:!bg-gray-50 dark:!bg-gray-700 dark:!border-gray-600 dark:!text-white dark:hover:!bg-gray-600">
                            {t("my_button") || "My Button"}
                        </MyButton>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t("language_settings") || "语言设置"}</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{t("language")}: {t("change_language")}</p>
                        <LanguageSwitcher />
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t("info_title") || "项目信息"}</h2>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                                {t("feature_1") || "支持多语言切换"}
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                                {t("feature_2") || "深色/浅色主题模式"}
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                                {t("feature_3") || "响应式设计"}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <footer className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
                <p>{t("footer_text") || "© 2023 Frontier. All rights reserved."}</p>
            </footer>
        </div>
    );
};

export default App;