import Logo1 from '../assets/img/client-databiz.svg'
import Logo2 from '../assets/img/client-audiophile.svg'
import Logo3 from '../assets/img/client-meet.svg'
import Logo4 from '../assets/img/client-maker.svg'
import "./LeftLogo.css"
const LeftLogo = () => {
    return ( 
        <div className='leftlogo'>
            <img src={Logo1} alt="logo" />
            <img src={Logo2} alt="logo" />
            <img src={Logo3} alt="logo" />
            <img src={Logo4} alt="logo" />

        </div>
     );
}
 
export default LeftLogo;