import React from "react";

function Login() {
  return (
    <div>
      <h1>Halaman Login</h1>
      <form>
        <label>Username: </label>
        <input type="text" /><br /><br />
        <label>Password: </label>
        <input type="password" /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
