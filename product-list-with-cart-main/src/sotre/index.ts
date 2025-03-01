import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import rawData from "../json/data.json";
import { Cart } from "../components/Cart";

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
    initialState: rawData.map((item:any, index:number) => ({...item, id: index})),
    reducers: {
        // add: (state, action: PayloadAction<Dessert>) => {
        //     return state;
        // },
        // remove: (state, action: PayloadAction<string>) => {
          
        // }
    },
});

const cartReducer = createSlice({
    name: "cartReducer",
    initialState: initialState,
    reducers: {
        add: (state, action: PayloadAction<Dessert>) => {
            return state;
        },
        remove: (state, action: PayloadAction<string>) => {
          
        }
    }
});

const menuReducer = createSlice({
    name: "menuReducer",
    initialState: "home",
    reducers: {
        curr: (_state:any, _action: PayloadAction<string>) => {
            return _action.payload;
        }
    }
});

const store = configureStore({
    reducer: {
        productReducer : productReducer.reducer,
        menuReducer: menuReducer.reducer
    }
});

export const {  } = productReducer.actions;
export const { add,remove } = cartReducer.actions;

export default store;