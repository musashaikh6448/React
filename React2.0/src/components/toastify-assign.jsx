import  { useState } from "react";
import { Card } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
 

const App = () => {
  const [username, setUsername] = useState(""); // State for username
  const [email, setEmail] = useState("");       // State for email
  const [password, setPassword] = useState(""); // State for password
  const [number, setNumber] = useState("");     // State for phone number
  const [message, setMessage] = useState("");   // State for success message

  // Handle form submit (save data and show success message)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    
    // Save data to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("number", number);
    
    // Show success message
    setMessage("Account Created Successfully! ✅");

    toast.success("Account created successfully")

    // Clear form inputs
    setUsername("");
    setEmail("");
    setPassword("");
    setNumber("");
  };

  // Get the user data from localStorage (so it's available even after page refresh)
  const savedUsername = localStorage.getItem("username");
  const savedEmail = localStorage.getItem("email");
  const savedPassword = localStorage.getItem("password");
  const savedNumber = localStorage.getItem("number");

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          className="form-control mb-3"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="form-control mb-3"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="form-control mb-3"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="tel"
          placeholder="Enter Phone No"
          className="form-control mb-3"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        <button className="btn btn-success mt-3">Login</button>
      </form>

      {/* Card to display user details */}
      <Card style={{ width: "18rem", marginTop: "20px" }}>
        <Card.Body>
          <h5>User Details</h5>
          <h6>Username:{savedUsername}</h6>
          <h6>Email: {savedEmail}</h6>
          <h6>Password: {savedPassword}</h6>
          <h6>Phone: {savedNumber}</h6>
        </Card.Body>
      </Card>

      {/* Success message */}
      <h1>{message}</h1>


      <ToastContainer />
    </div>
  );
};

export default App; 
