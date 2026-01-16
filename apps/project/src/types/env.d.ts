// src/types/env.d.ts
/// <reference types="vite/client" />

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

// 环境变量类型定义
declare interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_API_CIRCUIT_URL: string;
  readonly VITE_ENV: 'development' | 'production' | 'test';
  readonly VITE_APP_TITLE: string;
  readonly VITE_DEBUG: string;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
