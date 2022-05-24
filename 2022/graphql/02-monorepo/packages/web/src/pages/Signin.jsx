import { useState } from "react";

export function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((json) => console.log("Success", json));
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          inputMode="email"
          onChange={handleEmailChange}
          a
          autoComplete="username"
        />
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          onChange={handlePasswordChange}
          autoComplete="current-password"
        />
        <button type="submit">Entrar</button>
      </fieldset>
    </form>
  );
}
