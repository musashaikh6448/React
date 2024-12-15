import Nav from './Nav';
import { Routes, Route} from 'react-router-dom'

import AboutUs from './Components/AboutUs.jsx';
import Services from './Components/Services.jsx';
import Contact from './Components/Contact.jsx';
import Home from './Components/Home.jsx';

const App = () => {
    return (
        <div>
          <Nav/>
            <Routes>
      {/* <Route path='/' element={()=>{}}/> */}
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
    </Routes>
        </div>
    );
};

export default App;
