import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import minus from "../../public/assets/images/icon-decrement-quantity.svg";
import plus from "../../public/assets/images/icon-increment-quantity.svg";


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

interface Cart {
    id: string;
    name : string;
    price : number;
    count : number;
}

export const DessertList = () =>{
    const data = useSelector((state:any) => state.productReducer);
    const [ cart, setCart ] = useState<Cart[]>([]);
    const [rowdata , setData ] = useState<Dessert[]>([]);

    useEffect(()=> {
        setData(data);
      }, [data]);

    //장바구니 추가
    const addCart = (selectItem : Dessert) => {
        setCart((currentCart : any) => {
            const checkCart = currentCart.find((item: { id: string; }) => item.id === selectItem.id);
            if(checkCart){
                return currentCart.map((item: { id: string; count: number; }) => 
                    item.id === selectItem.id ? { ...item, count: item.count + 1 } : item
                );
            } else {
                return [...currentCart, { ...selectItem, count : 1 }]; 
            }
        });
        console.log(cart);
    };


 

    // useEffect(() => {
    //     const total = cart.reduce((sum, item) => sum+ (item.price* item.count), 0);
    //     setTotalPrice(total);
    // }, [cart]);
    
    return (
        <div className="column is-four-fifths">
            <h1>Dessers</h1>
            <div className="columns is-multiline">
                {
                    rowdata.map((item: any, index : number ) => {
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
                                        <button className="button" > <img src={minus} /></button>
                                        <div>{}</div>
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