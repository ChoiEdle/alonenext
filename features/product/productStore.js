// store/productStore.js
import { create } from 'zustand';

const useProductStore = create((set) => ({
    // === 초기 상태 ===
    productList: [],
    product: {},
    productReviewList: [],
    productQnAList: [],
    recentSubCategory: null,

    // === 액션 ===
    setProductList: (result) => set({ productList: result }),

    setProduct: (product) => set({ product }),

    setProductReviewList: (result) => set({ productReviewList: result }),

    setProductQnAList: (result) => set({ productQnAList: result }),

    setRecentSubCategory: (subCategory) => set({ recentSubCategory: subCategory }),
}));

export default useProductStore;


// import useProductStore from './store/productStore';
//
// const ProductComponent = () => {
//     const {
//         productList,
//         product,
//         productReviewList,
//         productQnAList,
//         recentSubCategory,
//         setProductList,
//         setProduct,
//         setProductReviewList,
//         setProductQnAList,
//         setRecentSubCategory,
//     } = useProductStore();
//
//     const fetchProductList = async () => {
//         const result = await fetch('/api/products').then((res) => res.json());
//         setProductList(result);
//     };
//
//     const fetchProduct = async (id) => {
//         const result = await fetch(`/api/product/${id}`).then((res) => res.json());
//         setProduct(result);
//     };
//
//     return (
//         <div>
//             <h1>Product List</h1>
//             <button onClick={fetchProductList}>Load Product List</button>
//             <ul>
//                 {productList.map((item) => (
//                     <li key={item.id}>
//                         <button onClick={() => fetchProduct(item.id)}>{item.name}</button>
//                     </li>
//                 ))}
//             </ul>
//
//             <h2>Selected Product</h2>
//             {product && <p>{product.name}</p>}
//
//             <h3>Product Reviews</h3>
//             <ul>
//                 {productReviewList.map((review) => (
//                     <li key={review.id}>{review.text}</li>
//                 ))}
//             </ul>
//
//             <h3>Product QnA</h3>
//             <ul>
//                 {productQnAList.map((qna) => (
//                     <li key={qna.id}>{qna.question}</li>
//                 ))}
//             </ul>
//
//             <h3>Recent SubCategory: {recentSubCategory}</h3>
//             <button onClick={() => setRecentSubCategory('New SubCategory')}>Set Recent SubCategory</button>
//         </div>
//     );
// };
