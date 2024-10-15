import HeroLeft from "./HeroLeft";
import HeroImg from '../assets/img/image-hero-desktop.png'
import './Hero.css'

const Hero = () =>{
    return (
        <div className="heromain">
            <HeroLeft/>

            <img src={HeroImg} alt="Hero"  id="heroimg"/>
        </div>
    );
}
export default Hero
