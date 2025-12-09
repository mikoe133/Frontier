import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n'
import './index.css'
import { Provider } from 'react-redux';
import { store,persistor } from '@/store/store';
import { initializeApp, cleanupApp } from '@/service/initialization';
import App from './App'
import { PersistGate } from 'redux-persist/integration/react';

// 启动时执行
initializeApp();
// 注册清理函数
window.addEventListener('beforeunload', cleanupApp);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
);
