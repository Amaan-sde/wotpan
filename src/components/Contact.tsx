import React from "react";

const Contact: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    padding: "40px",
    textAlign: "center",
  };

  const buttonStyle: React.CSSProperties = {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    background: "#2563eb",
    color: "#fff",
    borderRadius: "6px",
    textDecoration: "none",
  };

  return (
    <div style={containerStyle}>
      <h1>Contact Us</h1>
      <p>
        Email: <b>support@wotpan.com</b>
      </p>

      <a href="mailto:support@wotpan.com" style={buttonStyle}>
        Email Us
      </a>
    </div>
  );
};

export default Contact;
