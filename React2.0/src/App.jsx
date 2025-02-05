// import { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";

// const App = () => {
//   const [data, setData] = useState("");
//   const [massage, setMaggage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(data);
//     setData("");

//     setMaggage(data);

//     toast.success(`Hello ${massage}`);
//   };

//   return (
//     <div className="container mt-5 flex border p-5">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter Your Name"
//           className="form-control"
//           onChange={(e) => setData(e.target.value)}
//           value={data}
//         />
//         <button className="btn btn-success mt-5 "> Submit</button>
//       </form>

//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick={false}
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       <h1>{massage}</h1>
//     </div>
//   );
// };


// export default App;



// *************************************************

// import { useState } from "react";

// const App = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Hardcoded login credentials
//     if (username === "shaikh" && password === "shaikh") {
//       setMessage("Login Successful ✅");
//     } else {
//       setMessage("Invalid Login ❌");
//     }

//     // Clear input fields after submission
//     setUsername("");
//     setPassword("");
//   };

//   return (
//     <div className="container mt-5 flex border p-5">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter Username"
//           className="form-control mb-3"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Enter Password"
//           className="form-control mb-3"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="btn btn-success mt-3">Login</button>
//       </form>

//       {/* Display login message */}
//       {message && <h2 className="mt-3">{message}</h2>}
//     </div>
//   );
// };

// export default App;



// *******************************************************
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "shaikh" && password === "shaikh") {
      toast.success("Login Successful ✅");
    } else {
      toast.error("Invalid Login ❌");
    }

    setUsername("");
    setPassword("");
  };

  return (
    <div className="container mt-5 flex border p-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          className="form-control mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-success mt-3">Login</button>
      </form>

      {/* Toast Notification Container */}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default App;
