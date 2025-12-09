// store/cartStore.js
import { create } from 'zustand';

const useCartStore = create((set, get) => ({
    // === 초기 상태 ===
    cartCount: 0,
    cartList: [],
    totalPrice: 0,
    totalDcPrice: 0,
    isNew: false,
    shippingFee: 3000,

    // === 상태 변경 함수 ===
    setCartItem: (cartItem) => set({ cartList: cartItem }),

    updateCartList: (cartItem) => {
        const { cartList } = get();
        const flag = cartList.find(
            (cart) => String(cart.product.id) === String(cartItem.product.id)
        );

        if (!flag) {
            set({
                cartList: [...cartList, cartItem],
                isNew: true,
            });
        } else {
            set({ isNew: false });
        }
    },

    updateTotalPrice: () => {
        const { cartList } = get();
        const totalPrice = cartList
            .filter((cart) => cart.product.count > 0)
            .reduce((total, item) => total + item.qty * item.product.price, 0);
        set({ totalPrice });
    },

    updateTotalDcPrice: () => {
        const { cartList } = get();
        const totalDcPrice = cartList
            .filter((cart) => cart.product.count > 0)
            .reduce(
                (total, item) => total + item.qty * (item.product.price * item.product.dc * 0.01),
                0
            );
        set({ totalDcPrice });
    },

    getCartCount: () => {
        const { cartList, totalPrice } = get();
        const cartCount = cartList.length;
        const shippingFee = totalPrice >= 30000 ? 0 : 3000;
        set({ cartCount, shippingFee });
    },
}));

export default useCartStore;


// import useCartStore from './store/cartStore';
//
// const CartComponent = () => {
//     const {
//         cartList,
//         cartCount,
//         totalPrice,
//         totalDcPrice,
//         isNew,
//         shippingFee,
//         updateCartList,
//         updateTotalPrice,
//         updateTotalDcPrice,
//         getCartCount,
//     } = useCartStore();
//
//     const addToCart = (item) => {
//         updateCartList(item);
//         updateTotalPrice();
//         updateTotalDcPrice();
//         getCartCount();
//     };
//
//     return (
//         <div>
//             <h2>Cart ({cartCount})</h2>
//             {cartList.map((item) => (
//                 <div key={item.product.id}>
//                     {item.product.name} - {item.qty}개
//                 </div>
//             ))}
//             <p>Total: {totalPrice}원</p>
//             <p>Total Discount: {totalDcPrice}원</p>
//             <p>Shipping: {shippingFee}원</p>
//             <button onClick={() => addToCart({ product: { id: 1, name: 'Apple', price: 1000, dc: 10, count: 1 }, qty: 2 })}>
//                 Add Apple
//             </button>
//         </div>
//     );
// };
