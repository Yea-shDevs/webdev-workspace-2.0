function RegistrationApp() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [registeredUsers, setRegisteredUsers] = React.useState([]);
  const [message, setMessage] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (name === "" || email === "" || password === "") {
      setMessage("Please fill all fields.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: name,
      email: email
    };

    setRegisteredUsers([...registeredUsers, newUser]);

    setName("");
    setEmail("");
    setPassword("");
    setMessage("Registration Successful!");
  }

  return (
    <main className="page">
      <section className="registration-card">
        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">Register</button>
        </form>

        {message && <p className="success-message">{message}</p>}

        {registeredUsers.length > 0 && (
          <div className="users-box">
            <h2>Registered Users</h2>
            <ul>
              {registeredUsers.map(function (user) {
                return (
                  <li key={user.id}>
                    {user.name} - {user.email}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<RegistrationApp />);
