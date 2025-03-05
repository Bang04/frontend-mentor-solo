import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../sotre/index';

import minus from "../../public/assets/images/icon-decrement-quantity.svg";
import plus from "../../public/assets/images/icon-increment-quantity.svg";

//import DessertList from "./DessertList.css";

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

export const DessertList = () =>{

    const dispatch = useDispatch();

    const data = useSelector((state:any) => state.productReducer);
    const cart = useSelector((state:any)=> state.cartReducer);
    const [quantity, setQuantity ] = useState<number[]>(Array(data.length).fill(1)); //1 초기 수량 설정 



    //장바구니 추가
    //현재 선택한 아이템
    const addCart = (item : CartItem, index: number) => {
        dispatch(add({...item, count: quantity[index],}));
    };


    useEffect(() => {
       // console.log(cart);
    }, [cart]);
 
    const increaseQuantity = (index : number) => {
        const newQuantity = [...quantity];
        newQuantity[index] += 1;
        setQuantity(newQuantity);
    }
    const decreaseQuantity = (index : number) => {
        const newQuantity = [...quantity];
       if(newQuantity[index] > 1){
            newQuantity[index] -=1;
       }
       setQuantity(newQuantity);
    }
    // useEffect(() => {
    //     const total = cart.reduce((sum, item) => sum+ (item.price* item.count), 0);
    //     setTotalPrice(total);
    // }, [cart]);
    
    return (
        <div className="column is-four-fifths">
            <h1>Dessers</h1>
            <div className="columns is-multiline">
                {
                    data.map((item: any, index : number ) => {
                        return (
                            <div className="column is-one-third " key={index}>
                                <figure className="image">
                                    <img className="image" src={item.image.desktop} />
                                </figure>
                                <div>
                                    <button className="button is-danger is-rounded is-outlined"  onClick={() => addCart(item, index)}>
                                        <span>Add to Cart</span>
                                    </button>

                                    <div>   
                                        <button className="button" onClick={() => decreaseQuantity(index)}> <img src={minus} /></button>
                                        <div>{quantity[index]}</div>
                                        <button className="button" onClick={() => increaseQuantity(index)}> <img src={plus} /></button>
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