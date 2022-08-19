import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Marianne G.');

    navigate(lastPath, { replace: true })
  };

  return (
    <>
      <div className="container mt-5">
        <h1>Login</h1>
        <hr />
        <button
          onClick={onLogin}
          className="btn btn-primary">
          Login
        </button>
      </div>
    </>
  )
}