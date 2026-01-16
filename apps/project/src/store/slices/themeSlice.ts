// src/features/theme/themeSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeState {
  mode: ThemeMode;
  effectiveTheme: 'light' | 'dark';
}

// 不再从 localStorage 读取，而是使用默认值
const getEffectiveTheme = (mode: ThemeMode): 'light' | 'dark' => {
  if (mode === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return mode;
};

// 初始状态只使用默认值
const initialState: ThemeState = {
  mode: 'light',
  effectiveTheme: getEffectiveTheme('light'),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
      state.effectiveTheme = getEffectiveTheme(action.payload);
      // ✅ 不再手动写入 localStorage，由 Redux Persist 自动处理
    },
    updateEffectiveTheme: (state) => {
      if (state.mode === 'system') {
        state.effectiveTheme = getEffectiveTheme('system');
      }
    },
  },
});

export const { setThemeMode, updateEffectiveTheme } = themeSlice.actions;
export default themeSlice.reducer;