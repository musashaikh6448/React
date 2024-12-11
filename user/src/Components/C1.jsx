import C2 from "./C2"

const C1 = (props) => {
  return (
    <div>
        <p>this is header c1</p>
        <C2 username={props.username} age={props.age}/>
    </div>
  )
}

export default C1