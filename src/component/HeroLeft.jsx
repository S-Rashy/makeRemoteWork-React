import LeftLogo from "./LeftLogo";
import './HeroLeft.css'

const HeroLeft = () => {
    return ( 
        <div>
            <div className="left">
                <h1>Make remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button>Learn more</button>

                <LeftLogo/>
            </div>
            

        </div>
     );
}
 
export default HeroLeft;