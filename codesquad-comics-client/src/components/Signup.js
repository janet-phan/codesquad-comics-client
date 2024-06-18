import React from "react";

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Signup form submitted");

    const { firstName, lastName, username, password } = event.target.elements;
    console.log("First Name:", firstName.value);
    console.log("Last Name:", lastName.value);
    console.log("Username:", username.value);
    console.log("Password:", password.value);
  };

  return (
    <main className="signup-form-main">
      <h1>SIGNUP</h1>

      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="firstName">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" placeholder="First Name" name="firstName" required />
        </div>
        <div className="lastName">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" placeholder="Last Name" name="lastName" required />
        </div>
        <div className="username">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Username" name="username" required />
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Password" name="password" required />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
};

export default Signup;