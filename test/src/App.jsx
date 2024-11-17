
// import './App.css'

import Parent from "./parent"


// import Greetings from "./Greetings"



// import Header1 from "./Header1"
// import Header2 from "./Header2"

// import Header from "./Header"
// import MainSection from "./MainSection"


import P1 from "./p1"
import P2 from "./p2"

function App() {
  // let name='shaikh'
  // let age = 20
  // let address="west"

  return (
    <>
   {/* <Header></Header>
   <MainSection/> */}
   {/* <Header1/> */}
   {/* <Header2/> */}
   <P1/>
   <br />
   <br />
   <P2/>

   {/* <Greetings name={name} age={age} address={address}/>
   <Greetings name="azim" age='21' address='nanded'/>
   <Greetings name="raheel" age='20' address='nanded'/>
   <Greetings name="noman" age='19' address='nanded'/> */}
 
   <Parent/>
    </>
  )
}

export default App
