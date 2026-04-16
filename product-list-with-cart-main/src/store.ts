import { create } from "zustand";

interface Image {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Dessert {
  id: string;
  image: Image;
  name: string;
  category: string;
  price: number;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  count: number;
}

interface CartState {
  add: (item: CartItem) => void;
  remove: (id: string) => void;
  up: (id: string) => void;
  down: (id: string) => void;
  items: CartItem[];
}

// const productReducer = createSlice({
//     name: 'productReducer',
//     initialState: rawData.map((item:any, index:number) => ({
//         ...item,
//      id: index.toString(),
//     })),
//     reducers: {
//     },
// });

export const useCartStore = create<CartState>((set) => ({
  items: [],
  add: (newItem: CartItem) =>
    set((state) => {
      const existingItem = state.items.find(
        (item: CartItem) => item.id === newItem.id,
      );
      const amountToAdd = newItem.count > 0 ? newItem.count : 1;

      if (existingItem) {
        //이미 상품이 담긴 상태일때 수량 +1
        return {
          items: state.items.map((item: CartItem) =>
            item.id === existingItem.id
              ? { ...item, count: item.count + amountToAdd }
              : item,
          ),
        };
      } else {
        //처음 선택했을때 기본 수량 1
        return {
          items: [...state.items, { ...newItem, count: amountToAdd }],
        };
      }
    }),
  remove: (id: string) =>
    set((state) => ({
      items: state.items.filter((item: CartItem) => item.id !== id),
    })),
  up: (id: string) =>
    set((state) => ({
      items: state.items.map((item: CartItem) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
      ),
    })),
  down: (id: string) =>
    set((state) => ({
      items: state.items.map((item: CartItem) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item,
      ),
    })),
}));

// const cartReducer = createSlice({
//     name: "cartReducer",
//     initialState: initialState,
//     reducers: {
//         add: (state, action: PayloadAction<CartItem>) => {//해당 상품 처음 카트 담으면 기본 수량 1부터 시작
//             const existingItem = state.items.find((item : CartItem) => item.id === action.payload.id);
//             if(existingItem){ //이미 상품이 담긴 상태일때 수량 +1
//                 existingItem.count += 1;
//             }else{//처음 선택했을때 기본 수량 1
//                 state.items.push({...action.payload, count : 1});
//             }
//         },
//         remove: (state, action: PayloadAction<CartItem>) => {//카트에서 해당 상품 삭제
//             state.items = state.items.filter(item => item.id !== action.payload.id);
//         },
//         up: (state, action: PayloadAction<CartItem>) => {//카트에 담긴 상품 수량 증가할때
//             const existingItem = state.items.find((item => item.id === action.payload.id));
//             if(existingItem){
//                 existingItem.count +=1;
//             }
//         },
//         down: (state, action: PayloadAction<CartItem>) => {//카트 상품 수량 뺄때 1보다 크면 수량 -1씩 감소
//             const existingItem = state.items.find((item => item.id === action.payload.id));
//             if(existingItem && existingItem.count > 1){
//                 existingItem.count -=1;
//            }
//         },
//     }
// });

// const store = configureStore({
//     reducer: {
//        // productReducer : productReducer.reducer,
//         cartReducer: cartReducer.reducer
//     }
// });

//export const {  } = productReducer.actions;
// export const { add , remove, up, down } = cartReducer.actions;

// export default store;
