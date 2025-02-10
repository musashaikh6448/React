const Contact = () => {
    return (
      <div style={{ textAlign: "center", padding: "50px", backgroundColor: "#d6d6d6" }}>
        <h1 style={{ fontSize: "36px", color: "#111" }}>Contact Us</h1>
        <p style={{ fontSize: "18px", color: "#444" }}>
          Feel free to reach out for any inquiries.
        </p>
        <form style={{ marginTop: "20px" }}>
          <input type="text" placeholder="Your Name" style={{ padding: "10px", margin: "5px" }} />
          <br />
          <input type="email" placeholder="Your Email" style={{ padding: "10px", margin: "5px" }} />
          <br />
          <textarea placeholder="Your Message" style={{ padding: "10px", margin: "5px" }}></textarea>
          <br />
          <button style={{ padding: "10px 20px", backgroundColor: "#26be25", color: "white", border: "none", cursor: "pointer" }}>
            Send
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  