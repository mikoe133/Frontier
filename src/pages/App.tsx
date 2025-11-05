
import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { Button } from "antd";

const App: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="p-8">
            <h1 className=" text-white bg-black dark:text-red-500 dark:bg-gray-900">
                {t("hello")}
            </h1>

            <p className="dark:text-gray-300">{t("description")}</p>
            <Button>测试按钮</Button>
            {/* 切换语言 */}
            <p className="dark:text-gray-300">{t("language")}: {t("change_language")}</p>
            <LanguageSwitcher />

        </div>
    );
};

export default App;