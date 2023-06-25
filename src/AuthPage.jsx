import axios from "axios";
const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("http://localhost:3001/authenticate", { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("error", e));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">
          Follow-up your Medical condition with Dr. M-Care 👨‍⚕️
        </div>

        <div className="form-subtitle">Set the username to get connected</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
      <footer className="footer">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} M-Care. Developed By{" "}
          <a
            className="footer-text underline"
            href="https://mouaddev1.github.io/me/"
          >
            MouadDev1
          </a>
        </p>
      </footer>
    </div>
  );
};

export default AuthPage;
