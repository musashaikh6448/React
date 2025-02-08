import { useState } from "react";
import { Card } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

const form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
localStorage.setItem('fromData', JSON.stringify(formData))

    const data = localStorage.getItem("fromData");
       let userData=JSON.parse(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // setFormData({ ...formData, [e.target.name]: e.target.value });
 
  };
  return (
    <div className="container m-5">
      <h1>User Registration Form </h1>
      <form className=" border p-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="form-control my-5"
          value={formData.name}
          onChange={handleChange}
          name="name"
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="form-control my-5"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        <input
          type="number"
          placeholder="Enter Your Number"
          className="form-control my-5"
          value={formData.mobile}
          onChange={handleChange}
          name="mobile"
        />
        <input
          type="address"
          placeholder="Enter Your Address"
          className="form-control my-5"
          value={formData.address}
          onChange={handleChange}
          name="address"
        />
        <button className="btn btn-success">Submit</button>
      </form>

      <div className="card">
      <Card style={{ width: "18rem", marginTop: "20px" }}>
        <Card.Body>
         {
          userData && (
            <>
            
            </>
          )
         }
        </Card.Body>
      </Card>
      </div>
  

      <ToastContainer />
    </div>
  );
};

export default form;
