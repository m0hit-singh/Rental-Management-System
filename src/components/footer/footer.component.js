function FooterComponent() {
  const FooterStyle = {
    position: "fixed",
    bottom: "0",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "rgb(34 34 34)",
    width: "100%",
    height: "40px",
    padding: "10px",
  };
  return (
    <footer className="footer" style={FooterStyle}>
      <p>copyright © 2021, All rights reserved.</p>
    </footer>
  );
}

export default FooterComponent;
