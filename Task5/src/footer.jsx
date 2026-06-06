import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;