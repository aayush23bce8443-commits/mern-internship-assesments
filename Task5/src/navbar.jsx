import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Aayush</h2>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#courses">Courses</a>
        </li>

        <li>
          <a href="#resources">Resources</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;