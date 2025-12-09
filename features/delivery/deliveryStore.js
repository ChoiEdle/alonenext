// store/deliveryStore.js
import { create } from 'zustand';

const useDeliveryStore = create((set) => ({
    // === 초기 상태 ===
    deliveryList: [],

    // === 액션 ===
    setDeliveryList: (result) => set({ deliveryList: result }),
}));

export default useDeliveryStore;

// import useDeliveryStore from './store/deliveryStore';
//
// const DeliveryComponent = () => {
//     const { deliveryList, setDeliveryList } = useDeliveryStore();
//
//     const fetchDeliveryList = async () => {
//         const result = await fetch('/api/delivery').then((res) => res.json());
//         setDeliveryList(result);
//     };
//
//     return (
//         <div>
//             <h1>Delivery List</h1>
//             <button onClick={fetchDeliveryList}>Load Delivery List</button>
//             <ul>
//                 {deliveryList.map((item) => (
//                     <li key={item.id}>{item.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
