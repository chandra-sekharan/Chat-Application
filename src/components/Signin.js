import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {auth} from './Firebase';
import './Signin.css';
import logo from './g.svg';
const Signin = () => {
    function signwithG(){
       const provider = new firebase.auth.GoogleAuthProvider()
       auth.signInWithPopup(provider);
    }
     
    return(
        <div className="signin">
            <button onClick={signwithG}><img src={logo}></img>Sign in with Google</button>
        </div>
    );
}
export default Signin;