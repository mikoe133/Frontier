// src/components/ThemeSync.tsx
import { useEffect } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { updateEffectiveTheme } from '@/store/slices/themeSlice';

const { defaultAlgorithm, darkAlgorithm } = antdTheme;

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.theme.mode);
    const effectiveTheme = useAppSelector((state) => state.theme.effectiveTheme);
    console.log('effectiveTheme:', effectiveTheme);
    console.log('  document.documentElement.classList:', document.documentElement.classList);

    // 同步 HTML class
    useEffect(() => {
        console.log('effectiveTheme:', effectiveTheme);
        if (effectiveTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [effectiveTheme]);

    // 监听系统主题变化（仅当 mode === 'system'）
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (mode === 'system') {
                dispatch(updateEffectiveTheme());
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [mode, dispatch]);

    return (
        <ConfigProvider
            theme={{
                algorithm: effectiveTheme === 'dark' ? darkAlgorithm : defaultAlgorithm,
                // 可选：自定义 token
                // token: { colorPrimary: '#1890ff' }
            }}
        >
            {children}
        </ConfigProvider>
    );
};

export default ThemeProvider;
