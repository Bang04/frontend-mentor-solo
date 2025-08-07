
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../sotre/index';

import { OrderModal } from "./OrderModal";

import close from "../../public/assets/images/icon-remove-item.svg";
import emply from "../../public/assets/images/illustration-empty-cart.svg";
import neutral from "../../public/assets/images/icon-carbon-neutral.svg";


interface cartItem {
    id: string;
    name: string;
    count: number;
    price: number;
    isDelete: boolean;
}

export const Cart = () => {

    const cart = useSelector((state: any) => state.cartReducer.items);
    const dispatch = useDispatch();
    let total = 0;

    const [isOpen, setIsOpen] = useState(false);

    const removeCart = (item: cartItem) => {
        dispatch(remove(item));//카트에서 해당 상품 삭제
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const handelrOrder = () => {
        setIsOpen(true);
    }


    return (
         <div className="is-flex is-flex-direction-column has-background-white m-5 p-5">
            <div className="title is-4 text-red">Your Cart({cart ? cart.length : 0})</div>
            {cart && cart.length > 0 ?
                (
                    <div className='is-flex is-flex-direction-column'>
                        {
                            cart.map((item: any, index: number) => {
                                total += (item.count * item.price);
                                return (
                                    <div key={index} className="columns border-bottom">
                                        <div className="column is-10">
                                            <div className="is-size-7 has-text-weight-bold mb-2">{item.name}</div>
                                            <div className="columns">
                                                <div className="column is-1 is-size-7 has-text-weight-bold text-red">{item.count}x</div>
                                                <div className='column is-3 is-size-7 text-rose500'>@${item.price.toFixed(2)}</div>
                                                <div className='column is-1 is-size-7 text-rose500 has-text-weight-bold' >${(item.count * item.price).toFixed(2)}</div>
                                            </div>
                                        </div>
                                        <div className='column'>
                                             <button className="column button is-rounded m-0 p-0" onClick={() => removeCart(item)}>
                                                <img src={close}  className='image is-16x16'/>
                                            </button>
                                        </div>
                                       
                                    </div>
                                )
                            })
                        }
                        <div>
                            <div className='is-flex is-flex-direction-row is-align-items-center is-justify-content-space-between'>
                                <div className='is-size-7'>Order Total</div>
                                <div className="is-size-4 has-text-weight-extrabold">${total.toFixed(2)}</div>
                            </div>
                            <div className='is-align-items-center ' style={{ borderRadius: "0.5rem",  backgroundColor : "rgb(245,238,236)" }}>
                               
                                <div className='has-text-centered is-size-7 py-3 mt-3'> <img src={neutral} /> This is a <b>carbon-neutral</b> delivery</div>
                            </div>
                             <button className=" button is-rounded is-fullwidth has-text-white is-size-8 bg-red mt-5 py-3" onClick={handelrOrder}>
                                Confirm Order
                            </button>
                        </div>
                    </div>
                )
                : (
                    <div className="is-flex  is-flex-direction-column is-align-content-center mx-3 my-4">
                        <img src={emply} className="image is-128x128 m-auto" />
                        <div className='is-size-7 has-text-weight-semibold text-rose500 mt-3'>Your added items will appear here</div>
                    </div>
                )
            }
            <OrderModal isOpen={isOpen} closeModal={closeModal} cart={cart} />
        </div>
    )
};