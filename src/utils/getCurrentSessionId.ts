const getCurrentSessionId = (): string => {
    if (typeof window === 'undefined') return 'ssr';
    let sessionId = sessionStorage.getItem('results_session_id');
    if (!sessionId) {
        sessionId = Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem('results_session_id', sessionId);
    }
    return sessionId;
};
// 🔧 工具函数：获取当前页面会话 ID
export default getCurrentSessionId;