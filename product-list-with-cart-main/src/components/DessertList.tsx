import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { add, up, down } from '../sotre/index';

import minus from "../../public/assets/images/icon-decrement-quantity.svg";
import plus from "../../public/assets/images/icon-increment-quantity.svg";
import cartIcon from "../../public/assets/images/icon-add-to-cart.svg";

export const DessertList = () => {

    const dispatch = useDispatch();

    const data = useSelector((state: any) => state.productReducer);
    const cart = useSelector((state: any) => state.cartReducer.items) || [];

    const [quantity, setQuantity] = useState<number[]>(Array(data.length).fill(1));

    //장바구니에 상품 추가하기
    const addCart = (item: any, index: number) => {
        dispatch(add({ ...item, count: quantity[index] }));
    }
    //선택상품수량 증가
    const increaseQuantity = (item: any) => {
        dispatch(up(item));
    }

    //선택상품수량 감소
    const decreaseQuantity = (item: any) => {
        dispatch(down(item));
    }

    return (<div className="is-flex is-flex-direction-column is-flex-grow-2">
                <div className="title is-size-1-mobile is-size-2-tablet is-size-3-desktop">Dessers</div>
                <div className="columns is-multiline">
                    {
                        data.map((item: any, index: number) => {
                            const cartItem = cart.find((cartitem: any) => cartitem.id === item.id);
                            return (
                                <div className="column is-one-third is-relative" key={index}>
                                    <figure className="image">
                                        <img className="image is-hidden-mobile is-hidden-tablet-only" src={item.image.desktop} />   {/*데스크탑 모드*/}
                                        <img className="image is-hidden-mobile is-hidden-desktop" src={item.image.tablet} />        {/*테블릿 모드*/}
                                        <img className="image is-hidden-tablet is-hidden-desktop" src={item.image.mobile} />        {/*모바일 모드*/}
                                    </figure>
                                    <div className="button_group is-overlay has-text-centered ">
                                        {cartItem && cartItem.count >= 1 ?  //1개이상 선택된 상품 버튼 변경(수량 선택)
                                            <div className="is-flex active-button has-background-danger is-rounded is-justify-content-space-between">
                                                <button onClick={() => decreaseQuantity(item)}  className="button is-outlined is-small">
                                                    <img src={minus} />
                                                </button>
                                                <div className="has-text-white is-size-6 mx-2">{cartItem.count}</div>
                                                <button onClick={() => increaseQuantity(item)}  className="button is-outlined is-small">
                                                    <img src={plus} />
                                                </button>
                                            </div>
                                            ://기본 버튼(상품 담기 버튼)
                                            <div className="is-flex active-button">
                                                <button className="button is-rounded has-background-white has-text-black is-size-7 p-2 px-5" onClick={() => addCart(item, index)}>
                                                    <img src={cartIcon} /> Add to Cart
                                                </button>
                                            </div>
                                        }
                                    </div>
                                    <div className="is-relative mt-5">
                                        <div>{item.category}</div>
                                        <div className="has-text-weight-bold">{item.name}</div>
                                        <div className="has-text-weight-bold"><p className="red">${item.price.toFixed(2)}</p></div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
        </div>
       
    )
};