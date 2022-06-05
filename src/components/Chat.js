import React, { useState,useEffect } from "react";
import Signout from "./Signout";
import {auth, db} from './Firebase';
import Sendmessage from "./Sendmessage";
import './Chat.css';

const Chat = () => {
    const [messages , setmessages] = useState([]);
    useEffect(()=>{
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot =>{ 
            setmessages(snapshot.docs.map(doc => doc.data()))
        })
    },[])
    return( 
    <div>
        <Signout />
        <div className="chat">
            <h1 align="center">Messenger</h1>
        {messages.map(({id,text, photoURL, uid})=> 
        <div>
            <div  key={id} className={`${uid == auth.currentUser.uid ? 'sent':'received'}`}>
                <img src={photoURL} alt=""></img>
                <p>{text}</p>
            </div>
        </div>
    )}
    </div>
    <Sendmessage />
    </div>
)
}
export default Chat;