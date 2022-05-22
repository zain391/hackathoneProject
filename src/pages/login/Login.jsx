import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { firestore, auth } from '../../components/firebase/Firebase.utiles';
import {  signInWithEmailAndPassword,getAuth ,onAuthStateChanged} from "firebase/auth"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  let navigate=useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({})
    useEffect(() => {
      // setUser(auth.currentUser)
      onAuthStateChanged(auth, (user) => {
          if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              // const uid = user.uid;
              // console.log(user)
              setUser(user)
              const uid = user.uid;
              // ...
          } else {
              setUser({})
              // User is signed out
              // ...
          }
      });
  }, [])
  const loginUser = (e) => {

    
    // const auth = getAuth();
    
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            toast.success('User has been logged in!', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            alert('user logged in ')
            navigate("/shop");
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;

            alert('user doesn,t exist ')
            toast.error(error.message, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
}

  return (
    <div className='container col-4'>
        <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={loginUser}>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" onChange={e => { setLoginEmail(e.target.value) }} placeholder="example123@gamil.com"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" onChange={e => { setLoginPassword(e.target.value) }} placeholder="******************"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button onClick={loginUser} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
         Log In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;<span>{new Date().getFullYear()}</span> zain. All rights reserved.
  </p>
</div>
    </div>
  )
}

export default Login