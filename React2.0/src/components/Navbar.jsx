import { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import '../assets/css/navbar.css'

const Navbar = () => {
  

    const [component, setComponent] = useState("home");
  
    const handleRenderComponent = () => {
      switch (component) {
        case "home":
          return <Home />;
  
        case "about":
          return <About />;
  
        case "login":
          return <Login />;
      }
    };
  
    return (
      <>
        <button onClick={() => setComponent("home")}> Home</button>
        <button onClick={() => setComponent("about")}> about</button>
        <button onClick={() => setComponent("login")}> login</button>
  
        {handleRenderComponent()}
      </>
    );
}

export default Navbar