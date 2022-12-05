import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineMessage } from "react-icons/ai";


const socket = io.connect("http://localhost:8000") //client initialization 

const ChatBot = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messageReceived, setMessageReceived] = useState(null);
  const [message, setMessage] = useState(""); // sets msg to empty string
  const [chat, setChat] =useState([]); // sets chat state to empty array
  const [botChat, setBotChat] = useState(""); // sets bot chat  to empty string
  const { isLoading, error, isAuthenticated } = useAuth0(); // imports from Auth0
  const [isShown, setIsShown] = useState(false);

  const handleClick = (ev) => {
    setIsShown(current => !current);
    ;
  };
  
  const sendMessage = (e) => { 
        e.preventDefault()
        socket.emit("send-message", {message }); //emit:responsible for sending messages
        setChat([...chat, message])

            fetch("/bot")
            .then(res => res.json())
            .then((data) => {
                setBotChat(data.message)
            })
    };

    useEffect(() =>{ //to listen to the message from the server and display it to user
        socket.on("receive_message", (data) => {
            setMessageReceived([data.message]);
        })
    },[socket])

  return (
    <>
    {!isAuthenticated ? <p></p> :
    <Wrapper>
      <MsgBtn onClick={handleClick} style={{borderRadius:isShown ? "40px": "3px" }}>
        <AiOutlineMessage style={{fontSize:"25px", marginRight:"3px"}}/>
        {isShown ? "minimize" : "Message Us"}
      </MsgBtn>
      { isShown && 
        <div>
    <Title>Health Chat</Title>
    <Form>
            <Messages messageReceived={messageReceived} setMessageReceived={setMessageReceived}/> 
            <SendMessage  messageReceived={messageReceived} setMessageReceived={setMessageReceived}/>
    </Form>
    </div>
}
    </Wrapper>
    } 
    </>
  );
}; 
//Socket.io listens to the messages sent via the messageReceived event and spreads the data into the chat array. 
//The array of messages is passed into the ChatBox component for display on the UI.

const Wrapper = styled.div`
width:320px;
`

const Form = styled.form`
background-color: white;
height:300px;
padding-bottom: 70px;
border: 2px solid black; 
border-radius: 0 0 10px 10px;
position:relative;
overflow-y:scroll;
`

const Title = styled.div`
display:flex;
justify-content: center;
background-color: salmon;
font-size:20px;
font-family:var(--font-body);
border-radius:10px 10px 0 0;
border:2px solid black;
`
const MsgBtn = styled.button`
display:flex;
justify-content: center;
align-items: center;
margin-left:190px;
width:120px;
height:50px;
cursor:pointer; 
border-radius: 3px;
border: 1px solid rgba(100, 200, 200, 1);
background-color: rgba(100, 200, 200, 1);
color:white;
outline: none;
-webkit-transition: all ease .15s;
  -o-transition: all ease .15s;
  -moz-transition: all ease .15s;
  transition: all ease .15s;
  &:hover{
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.2);
  transform: scale(1.15);
  }
`

export default ChatBot;
