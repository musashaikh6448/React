import "./App.css";
import { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";

const App = () => {
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
};

export default App;
