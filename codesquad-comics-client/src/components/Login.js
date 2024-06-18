import React from "react";

const Login = ({ user, setUser }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login form submitted");

    const { email, password } = event.target.elements;
    console.log("Email:", email.value);
    console.log("Password:", password.value);
  };

  return (
    <main className="login-form-main">
      <h1>LOGIN</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="email">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
};

export default Login;
