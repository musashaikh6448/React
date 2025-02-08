// const Props = (Props) => {                                             simple
// const Props = ({ student }) => {                                       object
// const { name, email, mobile, grade } = student;                       destructing  object

// const Props = ({ cars }) => {                                       //array
const Props = ({ event }) => {                                   
  return (
    <>
      {/* simple */}
      {/* <h1>{Props.name}</h1>
    <h1>{Props.age}</h1> */}

      {/* object */}
      {/* <h1>{name}</h1>
    <h1>{email}</h1>
    <h1>{mobile}</h1>
    <h1>{grade}</h1> */}

      {/* array */}
      {/* <h1>{cars[0]}</h1>
<h1>{cars[1]}</h1>
<h1>{cars[2]}</h1>
<h1>{cars[3]}</h1>
<h1>{cars[4]}</h1> */}

      {/* {cars.map((car) => {                                       //array destructing
        return <h1>{car}</h1>;
      })} */}


{/* function */}

<button className="btn btn-primary" onClick={()=> event('shaikh')}>click me</button>                

    </>
  );
};

export default Props;
