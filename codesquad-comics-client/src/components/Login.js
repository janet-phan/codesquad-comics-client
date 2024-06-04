import React from 'react';


const Login = () => {
    return (
      <main className="login-form-main">

        <h1>LOGIN</h1>
        
        <form className="login-form">
          <div className="email">
            <label htmlFor="email">Email address:</label>
            <input type="email" id="email" placeholder="Email" />
        </div>
        <div className="password">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Password" />
        </div>
        <div><button>Submit</button></div>

        </form>

    </main>
    )
  }

  export default Login;