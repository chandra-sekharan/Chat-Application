import React from "react";
import { auth } from "./Firebase";
import './Signout.css';
const Signout = () => {
    return( 
    <div className="signout">
        <button onClick={()=> auth.signOut()}>SignOut</button>
    </div>
    );
}
export default Signout;