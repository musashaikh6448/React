import Button from "./Button"
import Input from "./Input"
import Label from "./Label"

const Form = () => {
    let Fname = "First  Name"
    let Lname = "Last  Name"
    let Email = "Email"
    let Password = "password"
    let btn = "Sign Up"
    
  return (
    <div className="card">
        <h2>Sign Up</h2>
        <form action="" className="form">
            <Label text={Fname}/>
            <Input placeholder={Fname}/>


            <Label text={Lname}/>
            <Input placeholder={Lname}/>


            <Label text={Email}/>
            <Input placeholder={Email}/>


            <Label text={Password}/>
            <Input placeholder={Password}/>


            <Button btn={btn}/>
            <p> Already registered <a href="">Sign in ?</a></p>
        </form>
    </div>
  )
}

export default Form