
import React from "react";
import logo from '../assets/images/logo.svg';
const Header = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="flex max-w-7xl items-center justify-between m-auto mt-5">
            <a href="#" className="logo"><img src={logo} /></a>
            <button
                onClick={() => { setIsOpen(!isOpen) }}
                className="flex md:hidden">메뉴열기</button>

            {/* {모바일 메뉴} */}
            <nav className={`md:hidden ${isOpen ? 'flex' : 'hidden'} fixed top-24 left-1/2 -translate-x-1/2 w-[80%] bg-purple-700 rounded-2xl shadow-xl`}>
                <div className="flex flex-col w-full py-6 text-white text-center font-bold">
                    {/* 상단 메뉴 */}
                    <div className="flex flex-col border-b border-purple-400 pb-4 mb-4">
                        <div className="mx-4 my-2 py-2 rounded-xl hover:bg-lime-400 hover:text-purple-900 transition text-[1.5rem]">
                            Features
                        </div>
                        <div className="mx-4 my-2 py-2 rounded-xl hover:bg-lime-400 hover:text-purple-900 transition text-[1.5rem]">
                            Pricing
                        </div>
                        <div className="mx-4 my-2 py-2 rounded-xl hover:bg-lime-400 hover:text-purple-900 transition text-[1.5rem]">
                            Resources
                        </div>
                    </div>

                    {/* 하단 메뉴 */}
                    <div className="flex flex-col">
                        <div className="mx-4 my-2 py-2 rounded-xl hover:bg-lime-400 hover:text-purple-900 transition text-[1.5rem]">
                            Login
                        </div>
                        <div className="mx-4 my-2 py-2 rounded-xl hover:bg-lime-400 hover:text-purple-900 transition text-[1.5rem]">
                            Sign Up
                        </div>
                    </div>
                </div>
            </nav>


            {/* {웹 메뉴} */}
            <nav className="hidden md:flex">
                 <div className="flex flex-row mx-3">
                    <div className="m-4 text-gray-400 font-black">Features</div>
                    <div className="m-4 text-gray-400 font-black">Pricing</div>
                    <div className="m-4 text-gray-400 font-black">Resources</div>
                </div>
                <div className="flex flex-row">
                    <div className="m-4 text-gray-400 font-black">Login</div>
                    <div className="m-4 text-gray-400 font-black">Sign Up</div>
                </div>
            </nav>


        </header>
    )
}

export default Header;