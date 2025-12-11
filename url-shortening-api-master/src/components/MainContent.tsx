import illustration from "../assets/images/illustration-working.svg";

const MainContent = () => {
return(
    <div className="h-96 bg-contain bg-right bg-no-repeat" style={{ backgroundImage: `url(${illustration})` }}>
        <div>

        <p className="text-5xl font-extrabold">More than just shorter links</p>

        <p className="text-gray-400">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
        </div>

        <button className="py-2 px-8 rounded-full font-bold text-white bg-sky-200">Get Started</button>
    </div>
)
}

export default MainContent;