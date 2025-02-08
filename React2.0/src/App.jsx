import Props from "./Props";

const App = () => {
  // let name = "shaikh";
  // let age = 25;

  // const student={
  //   name:"shaikh",
  //   email:"shaikh8698@gmail.com",
  //   mobile:123456789990,
  //   grade:'a+'

  // }

  // const cars = ["suzuki", "toyota", "ford", "honda", "tesla"];


  const handleClick=(username)=>{
    console.log(username);
  }

  return (
    <>
      {/* <Props name={name} age={age} /> */}
      {/* <Props student={student} />            object */}
      {/* <Props cars={cars} />                        array */}

<Props  event={handleClick}/>

    </>
  );
};

export default App;
