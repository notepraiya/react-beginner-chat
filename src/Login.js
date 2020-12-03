import { Button } from '@material-ui/core';
import './Login.css';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = (e) => {
    // e.preventDefault(); //No need cuz not inside form
    auth.signInWithPopup(provider)
    .then(res => {
      console.log(res);
      dispatch({
        type: actionTypes.SET_USER,
        user: res.user,
      });
    })
    .catch(err => alert(err.message));
  }

  return (
    <div className="login">
      <div className="login_container">
        <img src="android-chrome-512x512.png" alt="logo"/>
        <h1>Sign in to react-beginner-chat app</h1>
        <p>notepraiya</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  )
}

export default Login;
