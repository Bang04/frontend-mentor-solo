
import React from "react";
import logo from '../assets/images/logo.svg';
const Header = () => {
    return (
        <div className="flex max-w-7xl items-center justify-between m-auto mt-5">
            <div className="flex flex-row">
                <div className="m-3"><img src={logo} /></div>
                <div className="flex flex-row mx-3">
                    <div className="m-4 text-gray-400 font-black">Features</div>
                    <div className="m-4 text-gray-400 font-black">Pricing</div>
                    <div className="m-4 text-gray-400 font-black">Resources</div>
                </div>
            </div>
            
            <div className="flex flex-row">
                <button className="m-4 text-gray-400 font-black" type="button">Login</button>
                <button className="m-4 text-gray-400 font-black" type="button">Sign Up</button>
            </div>
           
        </div>
    )
}

export default Header;