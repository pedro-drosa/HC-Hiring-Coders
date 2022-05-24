export function Signin() {
  return (
    <form action="/authenticate" method="post">
      <fieldset>
        <label for="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          inputmode="email"
          autocomplete="username"
        />
        <label for="password">Senha:</label>
        <input
          type="password"
          name="password"
          id="password"
          autocomplete="current-password"
        />
        <button type="submit">Entrar</button>
      </fieldset>
    </form>
  );
}
