import Logo from '../assets/img/logo.svg'
import './Header.css'

const Header = () => {
    return ( 
        <nav>
        <div className="navleft">
           <img src={Logo} alt="logo" />

           <div id="links">
                <select name="features" id="features">
                    <option value="">Features</option>
                    <option value="">Todo List</option>
                    <option value="">Calendar</option>
                    <option value="">Reminders</option>
                    <option value="">Planning</option>
                </select>

                <select name="company" id="company">
                    <option value="">Company</option>
                    <option value="">History</option>
                    <option value="">Our Team</option>
                    <option value="">Blog</option>
                </select>

                <a href="#">Careers</a>
                <a href="#">About</a>

            </div>

        </div>

        <div class="navright">
            <a href="#">Login</a>
            <button>Register</button>
        </div>

        </nav>
     );
}
 
export default Header;