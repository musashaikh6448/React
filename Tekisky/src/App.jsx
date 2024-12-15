import './App.css'
import Nav from './Nav'
import { Routes, Route} from 'react-router-dom'
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import Services from './Services.jsx'


const App = () => {
  return (
    <>
    <Nav></Nav>
    <Routes>
      <Route path='/' />
      <Route path='/home' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
    </>
  )

}

export default App