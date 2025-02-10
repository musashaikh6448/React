import NavBar from "./components/NavBar"
import { Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"


const App = () => {
  return (
    <>
<NavBar/>
<Routes>
      <Route path='/' />
      <Route path='/home' element={<Home/>}/>
      <Route path='/contactus' element={<Contact/>}/>
      <Route path='/aboutus' element={<About/>}/>
    </Routes>

    </>
  )
}

export default App