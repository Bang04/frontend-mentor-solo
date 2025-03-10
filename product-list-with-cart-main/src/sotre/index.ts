import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import rawData from "../json/data.json";
import { stat } from "fs";

interface Image {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
}

interface Dessert {
    id : string;
    image: Image;        
    name: string;       
    category: string;    
    price: number;       
}

interface CartItem {
    id: string;
    name : string;
    price : number;
    count : number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const productReducer = createSlice({
    name: 'productReducer',
    initialState: rawData.map((item:any, index:number) => ({
        ...item,
     id: index.toString(),
    })),
    reducers: {
    },
});

const cartReducer = createSlice({
    name: "cartReducer",
    initialState: initialState,
    reducers: {
        add: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find((item : CartItem) => item.id === action.payload.id); 
            if(existingItem){
                existingItem.count += 1;
            } 
        },
        remove: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload.toString());
        },
        up: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find((item => item.id === action.payload.id));
            if(existingItem){
                existingItem.count +=1;
            }
        },
        down: (state, action: PayloadAction<string>) => {
            const existingItem = state.items.find((item => item.id === action.payload));
            if(existingItem && existingItem.count > 1){
                existingItem.count -=1;
           }
        },
    }
});


const store = configureStore({
    reducer: {
        productReducer : productReducer.reducer,
        cartReducer: cartReducer.reducer
    }
});

export const {  } = productReducer.actions;
export const { add , remove, up, down } = cartReducer.actions;

export default store;