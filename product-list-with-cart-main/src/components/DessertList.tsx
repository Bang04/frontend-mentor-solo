import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { add,  up, down } from '../sotre/index';

import minus from "../../public/assets/images/icon-decrement-quantity.svg";
import plus from "../../public/assets/images/icon-increment-quantity.svg";

//import "./DeseertList.css";


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


export const DessertList = () =>{

    const dispatch = useDispatch();

    const data = useSelector((state:any) => state.productReducer);
    const cart = useSelector((state:any)=> state.cartReducer);
   
    //const [quantity, setQuantity] = useState<number[]>(Array(data.length).fill(1));
    const  [quantity, setQuantity] = useState<number[]>(Array(data.length).fill(1));
    useEffect(() => {
       // console.log(cart);
    }, [cart]);
    
    //수량 증가
    const increaseQuantity = (item : any, index : number) => {
        dispatch(add({...item, count: quantity[index]}));
        dispatch(up(item));

        setQuantity(
            quantity.map((n, idx) => idx === index ? n + 1 : n)
        )
        // setQuantity(preQuantity => {
        //     const newQuantity = [...preQuantity];
        //     newQuantity[index] = item.count;
        //     return newQuantity;
        // });
    }

    //수량 감소
    const decreaseQuantity = (item : any, index : number) => {
        dispatch(add({...item, count: quantity[index]}));
        dispatch(down(item));
        if(item.count > 1){
            setQuantity(
                quantity.map((n, idx) => idx === index ? n - 1 : n)
            )
        }
        // if(item.count > 1){
        //     setQuantity(preQuantity => {
        //         const newQuantity = [...preQuantity];
        //         newQuantity[index] = item.count;
        //         return newQuantity;
        //     });
        // }
    }

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
                                  
                                    <div className="button_group">   
                                        {   item.count > 1? 
                                            <div>
                                                <button className="disable" onClick={() => decreaseQuantity(item, index)}> <img src={minus} /></button>
                                                <div>{quantity[index]}</div>
                                                <button className="active" onClick={() => increaseQuantity(item, index)}> <img src={plus} /></button>
                                            </div>
                                            :
                                            <button className="btuuon">Add to Cart</button>
                                        }
                                       
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