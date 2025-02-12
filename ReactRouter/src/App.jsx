import './App.css'
import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from './Pages/HomePage'
import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUs'
import Login from './Pages/Login'
import PageNotFound from './Pages/PageNotFound'
import NavBar from "./Components/NavBar"
// import ProductCards from './Components/ProductCard'


const App = () => {

  const location=useLocation()

  return (
    <div className="container">
      {/* <NavBar/> */}

{
    location.pathname  !== '/login' && <NavBar/>
}


    <Routes>
      <Route path="/"  element={<HomePage/>}/>
      <Route path="/contact"  element={<ContactUs/>}/>
      <Route path="/about"  element={<AboutUs/>}/>
      <Route path="/login"  element={<Login/>}/>
      <Route path="*"  element={<PageNotFound/>}/>



    </Routes>
{/* <ProductCards/> */}

 



    </div>
  )
}

export default App
 