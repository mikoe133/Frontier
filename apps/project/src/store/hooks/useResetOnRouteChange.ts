// hooks/useResetOnRouteChange.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PURGE } from 'redux-persist';
import { cleanupOldImgDatabases } from '@/utils/cleanupOldSessions';

const useResetOnRouteChange = (shouldReset: boolean = true) => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (shouldReset) {
      console.log('重置状态');

      // dispatch(parsedclearall());
      // dispatch(imgclearall());
      
      // // ✅ 修复：添加 result 函数
      // dispatch({
      //   type: PURGE,
      //   result: () => null,
      // });

      cleanupOldImgDatabases();
    }
  }, [location.pathname, shouldReset]);
};

export default useResetOnRouteChange;