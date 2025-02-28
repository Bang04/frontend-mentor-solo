import { useState } from "react";
import data from "../json/data.json";
import minus from "../../public/assets/images/icon-decrement-quantity.svg";
import plus from "../../public/assets/images/icon-increment-quantity.svg";

interface cartItem {
    id :  string;
    name: string;
    count: number;
    price: number;
    isDelete: boolean;
}

export const DessertList = () =>{
    const [ cart, setCart ] = useState<cartItem[]>([]);
    const [ totalPrice , setTotalPrice ] = useState<number>(0);
    const [ count , setCount ] = useState<number>(0);
    //장바구니 추가
    const addCart = (selectItem : cartItem) => {
        setCart((prevCart) => {
            const newCart = [...prevCart, selectItem ];
            return newCart;
        });
    }

    const calculateTotalPrice = (cartItem : cartItem[]) => {
        const total = cartItem.reduce((sum, cartItem) => sum+ (cartItem.price* cartItem.count), 0);
        setTotalPrice(total);
    }
    const increaseQuantity = (item?: cartItem) => {
   
    }
    return (
        <div className="column is-four-fifths">
            <h1>Dessers</h1>
            <div className="columns is-multiline">
                {
                    data.map((item: any, index) => {
                  

                        return (
                            <div className="column is-one-third " key={index}>
                                <figure className="image">
                                    <img className="image" src={item.image.desktop} />
                                </figure>
                                <div>
                                    <button className="button is-danger is-rounded is-outlined"  onClick={() => addCart(item)}>
                                        <span>Add to Cart</span>
                                    </button>

                                    <div>   
                                    <button className="button" onClick={() => increaseQuantity(item.id)}> <img src={minus} /></button>
                                    <div>{count}</div>
                                    <button className="button"> <img src={plus} /></button>
                                    </div>
                                 
                                </div>
                             
                                <div>{item.category}</div>
                                <div>{item.name}</div>
                                <div className=""><p className="red">${item.price.toFixed(2)}</p></div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
};