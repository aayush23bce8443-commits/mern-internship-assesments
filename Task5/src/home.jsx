import "./style.css";

const Home = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Welcome 👋</h2>
        <p>Create your account</p>

        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            pattern="[6-9]{1}[0-9]{9}"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Home;