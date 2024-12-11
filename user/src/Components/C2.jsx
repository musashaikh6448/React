import C3 from "./C3"

const C2 = (props) => {
  return (
    <>
    <p>this is header c2</p>
    <C3 username={props.username} age={props.age}/>
    </>
  )
}

export default C2