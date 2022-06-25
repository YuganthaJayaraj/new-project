import { Avatar, IconButton } from '@material-ui/core';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhoneIcon from '@material-ui/icons/Phone';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import CameraIcon from '@material-ui/icons/Camera';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import React,{useState,useEffect} from 'react';


import './Chat.css';

function Chat() {
    const [input,setInput] = useState("");
    const [seed,setSeed] = useState("");
   
    

    useEffect (() => {
        setSeed (Math.floor(Math.random() * 5000));

    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed >>>", input);
        setInput("");
    };






  return (
    <div className='chat'>
        <div className='chat__header'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
          <div className='chat__headerInfo'>
             <h3>Yuga</h3>
             <p>Last seen at...</p>
          </div>
          <div className='chat__headerRight'>
             <IconButton>
                 <VideoCallIcon/>
             </IconButton>
             <IconButton>
                 <PhoneIcon/>
             </IconButton>
             <IconButton>
                 <MoreVertIcon/>
             </IconButton>
          </div>
        </div>


        <div className='chat__body'>
            <p className={`chat__message ${true && 'chat__reciever'}`}>
                <span className='chat__name'>yuga</span>
                Hey helloo..
                <span className='chat__timestamp'> 2.42pm</span>

                
            </p>
           


           
            
        </div>
        <div className='chat__footer'>
            <CameraIcon />
            <AttachFileIcon />
            <InsertEmoticonIcon />
    

            
            <form>
                
                <input value = {input} onChange = { (e) => setInput (e.target.value)}placeholder='Type a message' type='text'  />
                <button onClick={sendMessage} type='submit' >Send a message</button>
                
            </form>
           
            <MicIcon/>

        </div>
       
      
    </div>
  );
}

export default Chat;
