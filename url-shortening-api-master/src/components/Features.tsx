import FeatureCard from "./FeatureCard";
import brand from "../assets/images/icon-brand-recognition.svg";
import fully from "../assets/images/icon-fully-customizable.svg";
import detailed from "../assets/images/icon-detailed-records.svg";


// featuresData.js
export const featuresData = [
    {
        id: 1,
        icon: brand,
        title: "Brand Recognition",
        description: "Boost your brand recognition with each click.",
    },
    {
        id: 2,
        icon: detailed,
        title: "Detailed Records",
        description: "Gain insights into who is clicking your links.",
    },
    {
        id: 3,
        icon:  fully,
        title: "Fully Customizable",
        description: "Improve your brand even more with customizable links.",
    },
];


const Features = () => {
    return (
        <section className="bg-gray-100 py-24">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold">Advanced Statistics</h2>
                <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                    Track how your links are performing across the web with our advanced statistics dashboard.
                </p>

                <div className="mt-16 grid gap-12 md:grid-cols-3">
                    {featuresData.map(({ id, icon, title, description }) => (
                        <FeatureCard
                            key={id}
                            icon={icon}
                            title={title}
                            description={description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;