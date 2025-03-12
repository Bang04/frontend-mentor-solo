import check from "../../public/assets/images/icon-order-confirmed.svg";
export const OrderModal = ({isOpen, closeModal , cart} : any) =>{

    let total = 0;
    const handleBackdropClick = (e : React.MouseEvent<HTMLDivElement>) => {
        closeModal();
    }

    return(
        <div className={`modal ${isOpen ? 'is-active' : '' }`} >
          <div className="modal-background"></div>
            <div className="modal-card">
                <section className="modal-card-body">
                    <div className="">
                        <img src={check} />
                        <div className="has-text-weight-bold is-size-4 my-4">Order Confirmed</div>
                        <p className="has-text-grey"> We hope you enjoy your food!</p>
                        <div className="content mx-4 px-4">
                            <div className="" >
                                {cart.map((item: any , index: number) => {
                                    total += (item.count*item.price);
                                    return(
                                        <div className="columns" key={index} >
                                                <div className="column"><img src={item.image.thumbnail} /></div>
                                                <div className="column">{item.name}</div>
                                                <div className="column">{item.count}x</div>
                                                <div className="column">@ ${item.price.toFixed(2)}</div>
                                                <div className="column">${(item.count*item.price).toFixed(2)}</div>
                                            </div>
                                    )
                                    })
                                }
                                <div >
                                    <div>Order Total</div>
                                    <div>${total.toFixed(2)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="has-text-centered pt-4 mt-3">
                        <button className="button is-size-5" aria-label="close"  onClick={(e:any)=> handleBackdropClick(e)}>
                            Start New Order
                        </button> 
                    </div>
                </section>
            </div>    
        </div>
    )
}