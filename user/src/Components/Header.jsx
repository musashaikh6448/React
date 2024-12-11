import C1 from "./C1"

const Header = (props) => {
  return (
    <>
   <p>this is header</p>
    <C1  username={props.username}  age={props.age}/>
    </>
  )
}

export default Header