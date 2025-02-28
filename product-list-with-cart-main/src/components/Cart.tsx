import React , {  useState } from "react";
import close from "../../public/assets/images/icon-remove-item.svg";

interface cartItem {
    id :  string;
    name: string;
    count: number;
    price: number;
    isDelete: boolean;
}

const data = [
    {
     
       "name": "Waffle with Berries",
       "category": "Waffle",
       "count" : 1,
       "price": 6.50
    },
    {
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "count" : 2,
        "price": 7.00
     },
     {
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "count" : 4,
        "price": 8.00
     }
];


export const Cart = () =>{

    return (
        <div className="column">
            <div>Your Cart()</div>
                {
                    data.map((item , index) => {
                        return (
                        <div key={index} className="columns">
                            <div className="column">
                                <div>{item.name}</div>
                                <div className="columns">
                                    <div className="column">{item.count}</div>
                                    <div className="column">${item.price.toFixed(2)}</div>
                                    <div className="column">${(item.count*item.price).toFixed(2)}</div>
                                </div>
                            </div>
                            <div className="column">
                                <button className="button is-rounded">
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
                        <div>{  }</div>
                    </div>
                    <div>
                       <p> This is a <b>carbon-neutral</b> delivery</p>
                    </div>
                    <div>
                        <button className="button">
                            Confirm Order
                        </button>
                    </div>
                </div>
                
        </div>
    )
};