// store/noticeStore.js
import { create } from 'zustand';

const useNoticeStore = create((set) => ({
    // === 초기 상태 ===
    noticeList: [],

    // === 액션 ===
    setNoticeList: (result) => set({ noticeList: result }),
}));

export default useNoticeStore;


// import useNoticeStore from './store/noticeStore';
//
// const NoticeComponent = () => {
//     const { noticeList, setNoticeList } = useNoticeStore();
//
//     const fetchNoticeList = async () => {
//         const result = await fetch('/api/notice').then((res) => res.json());
//         setNoticeList(result);
//     };
//
//     return (
//         <div>
//             <h1>Notice List</h1>
//             <button onClick={fetchNoticeList}>Load Notice List</button>
//             <ul>
//                 {noticeList.map((item) => (
//                     <li key={item.id}>{item.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
