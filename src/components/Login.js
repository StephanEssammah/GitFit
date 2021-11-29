import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login">
        <h1 className="login__header">GitFit</h1>
        <Link to="/select">
            <button className="btn btn--action login__button">LOGIN</button>
        </Link>
    </div>
  );
}

export default Login;
