const FeatureCard = ({ icon, title, description } : any)  => {
    return (
        <article className="bg-white p-8 rounded-lg shadow text-left relative">
            <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center -mt-16">
                <img src={icon} alt={title} />
            </div>
           <h3 className="mt-6 text-xl font-bold">{title}</h3>
      <p className="mt-4 text-gray-500">{description}</p>
        </article>
    );
}

export default FeatureCard

