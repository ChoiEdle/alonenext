// store/authStore.js
import { create } from 'zustand';

const useAuthStore = create((set, get) => ({
    // === 초기 상태 ===
    isLogin: false,
    id: null,
    provider: null,
    role: null,
    accessToken: null,

    // === 액션 ===
    login: ({ provider, accessToken, role }) => {
        set({ isLogin: true, provider, accessToken, role, id: null });

        // localStorage 저장 (클라이언트에서만)
        if (typeof window !== 'undefined') {
            localStorage.setItem(
                'loginInfo',
                JSON.stringify({ provider, accessToken, role })
            );
        }
    },

    logout: () => {
        set({ isLogin: false, id: null, provider: null, accessToken: null, role: null });

        if (typeof window !== 'undefined') {
            localStorage.removeItem('loginInfo');
        }
    },

    socialLogin: ({ provider, id, accessToken }) => {
        set({ isLogin: true, provider, accessToken, id, role: null });

        if (typeof window !== 'undefined') {
            localStorage.setItem(
                'loginInfo',
                JSON.stringify({ provider, id, accessToken })
            );
        }
    },

    // localStorage에서 로그인 정보 불러오기 (옵션)
    loadLoginInfo: () => {
        if (typeof window !== 'undefined') {
            const loginInfo = localStorage.getItem('loginInfo');
            if (loginInfo) {
                const data = JSON.parse(loginInfo);
                set({ ...data, isLogin: true });
            }
        }
    },
}));

export default useAuthStore;

//
// import useAuthStore from './store/authStore';
// import { useEffect } from 'react';
//
// const AuthComponent = () => {
//     const { isLogin, provider, role, accessToken, login, logout, socialLogin, loadLoginInfo } = useAuthStore();
//
//     useEffect(() => {
//         loadLoginInfo(); // 새로고침 시 localStorage에서 로그인 정보 복원
//     }, []);
//
//     return (
//         <div>
//             <p>Login: {isLogin ? '✅' : '❌'}</p>
//             <p>Provider: {provider}</p>
//             <p>Role: {role}</p>
//             <p>Token: {accessToken}</p>
//
//             <button onClick={() => login({ provider: 'email', accessToken: 'abc123', role: 'user' })}>
//                 Login
//             </button>
//             <button onClick={() => socialLogin({ provider: 'kakao', id: '123', accessToken: 'xyz' })}>
//                 Social Login
//             </button>
//             <button onClick={logout}>Logout</button>
//         </div>
//     );
// };
