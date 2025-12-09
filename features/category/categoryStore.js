// store/categoryStore.js
import { create } from 'zustand';

const useCategoryStore = create((set) => ({
    // === 초기 상태 ===
    categoryList: [],

    // === 액션 ===
    setCategoryList: (result) => set({ categoryList: result }),
}));

export default useCategoryStore;

// import useCategoryStore from './store/categoryStore';
//
// const CategoryComponent = () => {
//     const { categoryList, setCategoryList } = useCategoryStore();
//
//     const fetchCategoryList = async () => {
//         const result = await fetch('/api/categories').then((res) => res.json());
//         setCategoryList(result);
//     };
//
//     return (
//         <div>
//             <h1>Category List</h1>
//             <button onClick={fetchCategoryList}>Load Category List</button>
//             <ul>
//                 {categoryList.map((item) => (
//                     <li key={item.id}>{item.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
