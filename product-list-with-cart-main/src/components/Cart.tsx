
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../sotre/index';

import { OrderModal } from "./OrderModal";

import close from "../../public/assets/images/icon-remove-item.svg";
import emply from "../../public/assets/images/illustration-empty-cart.svg";
import neutral from "../../public/assets/images/icon-carbon-neutral.svg";
interface cartItem {
    id :  string;
    name: string;
    count: number;
    price: number;
    isDelete: boolean;
}


export const Cart = () =>{

    const cart = useSelector((state: any) => state.cartReducer.items);
    const dispatch = useDispatch();
    let total = 0;

    const [isOpen, setIsOpen] = useState(false);

    const removeCart = (item : cartItem) => {
        dispatch(remove(item));
    }
 

    const closeModal = () => {
        setIsOpen(false);
      }
    
    const handelrOrder = () => {
        setIsOpen(true);
    }


    return (
        <div className="column ">
            <div className="title is-4">Your Cart({cart ? cart.length : 0})</div>
               {cart && cart.length > 0 ?
                (
                <div>
                 {
                    cart.map((item: any , index: number) => {
                      
                        total += (item.count*item.price);
                        return (
                            <div key={index} className="columns">
                                <div className="column">
                                    <div className="has-text-weight-bold">{item.name}</div>
                                    <div className="columns">
                                        <div className="column has-text-weight-bold">{item.count}x</div>
                                        <div className="column">${item.price.toFixed(2)}</div>
                                        <div className="column">${(item.count*item.price).toFixed(2)}</div>
                                    </div>
                                </div>
                                <div className="column is-two-fifths">
                                    <button className="button is-rounded" onClick={() => removeCart(item) }>
                                        <img src={close} />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
                    <div>
                        <div>
                            <div>Order Total</div>
                            <div className="is-size-4 has-text-weight-bold">${total.toFixed(2)}</div>
                        </div>
                        <div>
                            <img src={neutral} />
                        <p> This is a <b>carbon-neutral</b> delivery</p>
                        </div>
                        <div>
                            <button className="button is-rounded is-danger" onClick={handelrOrder}>
                                Confirm Order
                            </button>
                        </div>
                    </div>
                </div>
    )
                : (
                <div>
                    <div>
                        <img src={emply} />
                        <p>Your added items will appear here</p>
                    </div>
                </div>
                )
               } 

        <OrderModal isOpen={isOpen} closeModal={closeModal} cart = {cart}/>
        </div>
    )
};