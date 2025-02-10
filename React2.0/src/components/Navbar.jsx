import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
   

    <Link to='/'></Link>
        <Link to='/home'>home</Link> <br/>
        <Link to='/contactus'>contact us</Link><br/>
        <Link to='/aboutus'>about us</Link>
    </>
  )
}

export default NavBar