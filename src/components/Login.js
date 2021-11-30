import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login">
        <h1 className="login__header">GitFit</h1>
        <div className="login__inputs">
          <label className="login__inputs__name" htmlFor="name">
            <input id="name" type="text" placeholder="name" autocomplete="off" />
            <span>Name</span>
          </label>
          <Link className="login__inputs__link" to="/">
              <button className="btn btn--action login__inputs__button">LOGIN</button>
          </Link>
        </div>
    </div>
  );
}

export default Login;
