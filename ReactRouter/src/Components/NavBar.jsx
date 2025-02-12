import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary container mt-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Mr.Shaikh
        </a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
           <Link   className="nav-link active"to='/'> Home</Link>
            </li>
            <li className="nav-item">
            <Link  className="nav-link active" to='about'> AboutUS</Link>

            </li>
            <li className="nav-item">
            <Link  className="nav-link active" to='contact'> ContactUs</Link>

            </li>
            <li className="nav-item">
            <Link  className="nav-link active" to='login'> Login</Link>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar
