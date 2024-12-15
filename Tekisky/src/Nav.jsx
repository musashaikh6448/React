import "./assets/Css/Nav.css";
import { Link } from "react-router-dom"


const Nav = () => {
  return (
    <div>
        <Link to='/'></Link>
        <Link to='/home'>home</Link> <br/>
        <Link to='/contact'>contact us</Link><br/>
        <Link to='/services'>services</Link>
    </div>
  )
}

export default Nav