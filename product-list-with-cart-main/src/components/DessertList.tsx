import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { add,  up, down } from '../sotre/index';

import minus from "../../public/assets/images/icon-decrement-quantity.svg";
import plus from "../../public/assets/images/icon-increment-quantity.svg";
import cartIcon from "../../public/assets/images/icon-add-to-cart.svg";

interface CartItem {
    id: string;
    name : string;
    price : number;
    count : number;
}

export const DessertList = () =>{

    const dispatch = useDispatch();

    const data = useSelector((state:any) => state.productReducer);
    const cart = useSelector((state:any)=> state.cartReducer.items) || [];
                     
    const  [quantity, setQuantity] = useState<number[]>(Array(data.length).fill(1));
   
    const addCart = (item : any, index : number) => {
        dispatch(add({...item, count: quantity[index]}));
    }
    //수량 증가
    const increaseQuantity = (item : any) => {
        dispatch(up(item));
    }

    //수량 감소
    const decreaseQuantity = (item : any) => {
        dispatch(down(item));
    }

    return (
        <div className="column is-four-fifths">
            <div className="title is-2">Dessers</div>
            <div className="columns is-multiline">
                {
                    data.map((item: any, index : number ) => {
                        
                        const cartItem = cart.find((cartitem: any) => cartitem.id === item.id);
                        return (
                            <div className="column is-one-third " key={index}>
                                <figure className="image">
                                    <img className="image" src={item.image.desktop} />
                                </figure>
                                <div className="button_group">   
                                    {cartItem && cartItem.count >= 1 ?
                                        <div className="is-flex active-button">
                                            <button className="button" onClick={() => decreaseQuantity(item)}><img src={minus} /></button>
                                            <div>{cartItem.count}</div>
                                            <button className="button" onClick={() => increaseQuantity(item)}><img src={plus} /></button>
                                        </div>
                                        :
                                        <button className="button is-rounded has-background-white has-text-black is-size-7 p-2 px-5" onClick={()=> addCart(item, index)}>
                                            <img src={cartIcon} /> Add to Cart
                                        </button>
                                    }
                                </div>
                                <div>{item.category}</div>
                                <div className="has-text-weight-bold">{item.name}</div>
                                <div className="has-text-weight-bold"><p className="red">${item.price.toFixed(2)}</p></div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
};