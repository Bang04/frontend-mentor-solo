import React , {  useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import close from "../../public/assets/images/icon-remove-item.svg";

interface cartItem {
    id :  string;
    name: string;
    count: number;
    price: number;
    isDelete: boolean;
}




export const Cart = () =>{
    const [ cart, setCart ] = useState<cartItem[]>([]);

    const deleteCart = (id : string) => {
        setCart((cart) =>  cart.filter(item => item.id !== id));

    }

    return (
        <div className="column">
            <div>Your Cart()</div>
                {
                  
                    // data.map((item , index) => {
                    //     return (
                    //     <div key={index} className="columns">
                    //         <div className="column">
                    //             <div>{item.name}</div>
                    //             <div className="columns">
                    //                 <div className="column">{item.count}</div>
                    //                 <div className="column">${item.price.toFixed(2)}</div>
                    //                 <div className="column">${(item.count*item.price).toFixed(2)}</div>
                    //             </div>
                    //         </div>
                    //         <div className="column">
                    //             <button className="button is-rounded" onClick={() => deleteCart(item.id) }>
                    //                 <img src={close} />
                    //             </button>
                    //         </div>
                    //     </div>
                    //     )
                    // })
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