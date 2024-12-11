import "./App.css"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import MainSection from "./Components/MainSection"
const App = () => {

let username="sonu"
let age=20
let services={
  s1:'webDevlopment',
  s2:'app devlopment'
}
let aboutus={
  address:'2nfloorworkshop',
  mob:12309874567
}


  return (
    <>
    <Header  username={username} age={age}/>
    <MainSection s1={services.s1}  s2={services.s2}/>
    <Footer address={aboutus.address}  mob={aboutus.mob}/>

    </>
  )
}

export default App