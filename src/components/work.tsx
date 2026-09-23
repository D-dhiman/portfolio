interface workProps {
    title: string;
    description: string;
    image: string;
    link: string;
    height: string;
    width: string;
}

function Work({ title, description, image, link, height, width }: workProps) {
    return (
            <a href={link} target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden rounded-md shadow-lg" style={{ height: height, width: width }}>
                <img src={image} alt={title} className={`w-full h-full object-fit rounded-md shadow-lg group-hover:scale-105 transition-transform duration-300`}/>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>

                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <h2 className="text-white text-[1.3vw] text-left font-semibold h2 mb-1">{title}</h2>
                    <p className="text-white text-[1vw] text-left text">{description}</p>
                </div>
            </a>
    );
}

export default Work;