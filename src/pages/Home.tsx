import cardImage from '../assets/card.png'
import GradientBlob from '../components/GradientBlob'
import Pill from '../components/pills'
import Work from '../components/work'

function Home(){
    return(
        <div className="w-full h-screen flex flex-col gap-10 overflow-x-hidden relative">
            <GradientBlob color="#7c3aed" size="45vw" top="-40vh" right="-7vw" opacity={0.5} />
            {/* landing page */}
            <div className="flex flex-col justify-left mt-[67vh] ml-[3vw]">
                <h1 className="text-[4vw] font-medium text-white h1 m-0 leading-none">Deepanshi Dhiman</h1>
                <h1 className="text-[11vw] font-bold text-white title m-0 leading-none">Portfolio</h1>
            </div>
            {/* Hero Section */}
            <div className="flex mt-[15vh]">
                <div>
                    <img src={cardImage} alt="card" className="hero-image" />
                </div>
                <div className="flex flex-col justify-center items-center gap-6">
                    <p className="h2 text-white font-medium text-[2vw] text-center">I am Deepanshi Dhiman, a software engineer obsessed with designing.</p>
                    <div className="flex gap-8 mt-10 mb-10">
                        <div> <img src="./src/assets/blender.png" alt="Skill 1" className="w-14 h-14"/></div>
                        <div> <img src="./src/assets/figma.png" alt="Skill 2" className="w-14 h-14"/></div>
                        <div> <img src="./src/assets/java.png" alt="Skill 3" className="w-14 h-14"/></div>  
                        <div> <img src="./src/assets/js.png" alt="Skill 4" className="w-14 h-14"/></div>
                        <div> <img src="./src/assets/pg.png" alt="Skill 5" className="w-14 h-14"/></div>  
                        <div> <img src="./src/assets/react.png" alt="Skill 6" className="w-14 h-14"/></div>
                        <div> <img src="./src/assets/canva.png" alt="Skill 7" className="w-14 h-14"/></div>  
                    </div>
                    <p className="h1 text-white font-medium text-[2vw] text-center">What can i do for you?</p>
                    <ul className="flex flex-col gap-2">
                        <li className="text-white text font-medium text-[1.1vw]">UI/UX DESIGNING</li>
                        <li className="text-white text font-medium text-[1.1vw]">SOFTWARE DEVELOPMENT</li>
                        <li className="text-white text font-medium text-[1.1vw]">GRAPHIC DESIGNING</li>
                        <li className="text-white text font-medium text-[1.1vw]">LOGO DESIGNING</li>
                        <li className="text-white text font-medium text-[1.1vw]">3D-MODELING</li>
                    </ul>
                </div>
            </div>
            <GradientBlob color="#7c3aed" size="59vw" top="187vh" right="70vw" opacity={0.5}/>
            {/* history and extras */}
            <div className="flex flex-col justify-center items-center gap-10 mt-[20vh] relative">
                <div>
                    <Pill color="#ff00cc" width="30vw" length="6vw" top="2vh" left="-25vw" text=""/>
                    <Pill color="#d13434" width="13vw" length="4vw" top="-3vh" left="5vw" text="contact me"/>
                    <Pill color="#abf633" width="10vw" length="3vw" top="6vh" left="6vw" text="resume"/>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-white h2 font-semibold text text-[2.6vw] mt-3">Associated with</p>
                    <ul className="flex gap-10 mt-7">
                        <li className="text-white h1 font-light text text-[1.3vw]">Modern School</li>
                        <li className="ml-8 list-disc"></li>
                        <li className="text-white h1 font-light text text-[1.3vw]">IGDTUW</li>
                        <li className="ml-8 list-disc"></li>
                        <li className="text-white h1 font-light text text-[1.3vw]">Serva Sewa Trust</li>
                        <li className="ml-8 list-disc"></li>
                        <li className="text-white h1 font-light text  text-[1.3vw]">DRDO</li>
                        <li className="ml-8 list-disc"></li>
                        <li className="text-white h1 font-light text text-[1.3vw]">CCRAS</li>
                    </ul>
                </div>
                <div>
                    <Pill color="#DAE41F" width="30vw" length="6vw" top="25vh" right="-26vw" text=""/>
                    <Pill color="#18A7FF" width="8vw" length="4vw" top="20vh" right="4vw" text="art"/>
                </div>
            </div>
            <div className="mt-[20vh] ml-[3vw] mr-[3vw] flex flex-wrap justify-center gap-5">
                <Work title="Serva Sewa Trust" description="A simple website aimed at connecting students with newer opportunities." image="./src/assets/sst.png" link="#" height="27vw" width="50vw"/>
                <Work title="Portfolio" description="A simple portfolio website to showcase my work and skills." image="./src/assets/f-icon.png" link="#" height="20vw" width="30vw"/>
            </div>
            <div className="mt-[20vh] flex flex-wrap justify-center gap-5">
                <div></div>
            </div>
        </div>
    )
}

export default Home;