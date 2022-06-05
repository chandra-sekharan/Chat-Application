import React, { useState } from "react";
import firebase from 'firebase/compat/app';
import {db, auth} from './Firebase';
import './sendmessage.css';
const Sendmessage = () =>{
    const [chat ,setchat] = useState('');
    async function senddata (e){
     e.preventDefault();
     const {uid , photoURL}  = auth.currentUser;
     await db.collection('messages').add({
          text:chat,
          photoURL,
          uid,
          createdAt : firebase.firestore.FieldValue.serverTimestamp()
     })  
    }
    return(
        <div className="send">
            <form onSubmit={senddata}>
               <input type="text" placeholder="Message" value={chat} onChange={(e)=> setchat(e.target.value)}></input>
               <button>Submit</button>
            </form>
        </div>
    );
}

export default Sendmessage;