import io from "socket.io-client";
import { useState, useEffect } from "react";
import styled from "styled-components";

const socket = io.connect("http://localhost:8000")

// const socket = io();

const ChatBot = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messageReceived, setMessageReceived] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] =useState([]);
  const [botChat, setBotChat] = useState("");

    const sendMessage = (e) => {
        e.preventDefault()
        socket.emit("send-message", {message });
        setChat([...chat, message])

            fetch("/bot")
            .then(res => res.json())
            .then((data) => {
                setBotChat(data.message)
            })

    };


    useEffect(() =>{
        socket.on("receive_message", (data) => {
            setMessageReceived(data.message);
        })
    },[socket])
console.log(chat)
  return (
    <Wrapper>
        <Title>Enouia Health Chat</Title>
        <h1>Message:</h1>
        <p>Hello, Im a Bot!</p>
        <div>{botChat}</div>
        {messageReceived}
        <div>
            {
                chat.map((item)=>{
                    return(
                        <div>
                            {item}
                        </div>
                )
                })
            }
        </div>
      <Input placeholder="Message..." 
      onChange={(event)=>{
          setMessage(event.target.value);
        //   console.log(message)
      }}
      />
      <Button onClick={sendMessage} > Send </Button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
height:320px;
width:280px;
border: 2px solid black; 
border-radius: 10px;
position:relative;
`
const Title = styled.div`
display:flex;
justify-content: center;
background-color: salmon;
font-size:20px;
border-radius:10px;
`
const Input = styled.input`
position:absolute;
bottom:0;
height:30px;
width:180px;
border-radius: 4px;
margin-bottom:5px;
`
const Button = styled.button`
position:absolute;
bottom:0;
right:0;
cursor: pointer;
border: 0;
border-radius: 4px;
font-weight: 600;
margin: 0 5px;
width: 70px;
padding: 10px 0;
box-shadow: 0 0 20px rgba(104, 85, 224, 0.2);
transition: 0.4s;
background-color: red;
box-shadow: 0 2px 3px #292929, 0 0 23px white inset;
color: white;
margin-bottom:7px;
`

export default ChatBot;
