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
                        <div className="has-text-weight-bold is-size-2 is-size-3-mobile has-text-weight-bold">Order Confirmed</div>
                        <p className="text-rose500"> We hope you enjoy your food!</p>
                        <div className="content p-6 bg-rose50 mt-5">
                            <div className="" >
                                {cart.map((item: any , index: number) => {
                                    total += (item.count*item.price);
                                    return(
                                        <div className="columns border-bottom" key={index} >
                                                <div className="column is-3"><img src={item.image.thumbnail} /></div>
                                                <div className="column is-7">
                                                    <div className="columns is-gapless is-multiline">
                                                        <div className="column is-full is-size-6 has-text-weight-bold">{item.name}</div>
                                                        <div className="column is-1 text-red has-text-weight-bold">{item.count}x</div>
                                                        <div className="column is-3 text-rose500">@${item.price.toFixed(2)}</div>
                                                    </div>
                                                  
                                                </div>
                                                
                                                <div className="column has-text-right has-text-weight-bold">${(item.count*item.price).toFixed(2)}</div>
                                            </div>
                                    )
                                    })
                                }
                                <div className="is-flex is-justify-content-space-between">
                                    <div>Order Total</div>
                                    <div className="is-size-4 has-text-weight-extrabold">${total.toFixed(2)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="has-text-centered pt-4 mt-3">
                        <button className="button is-rounded is-fullwidth is-size-5 bg-red has-text-white has-text-weight-extrabold" aria-label="close"  onClick={(e:any)=> handleBackdropClick(e)}>
                            Start New Order
                        </button> 
                    </div>
                </section>
            </div>    
        </div>
    )
}