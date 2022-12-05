import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { io } from 'socket.io-client';
import { useAuth0 } from '@auth0/auth0-react';

const SendMessage = ({ messageReceived, setMessageReceived  }) => {
  const [message, setMessage] = useState('');
  const [msgList, setMsgList] = useState('');
  const { user } = useAuth0();

useEffect(()=>{
  if (message !== '') {
    const socket = io('http://localhost:8000')
    // Send message to server. We can't specify who we send the message to from the frontend. We can only send to server
    socket.emit('send_message', { message }); //emit:responsible for sending messages
    socket.on('send_message', (res)=>{  // on: responsible for listening for incoming msgs 
      setTimeout(()=>setMessageReceived([...messageReceived, res]),500)
      if(messageReceived.length  >= 10){ // fixed array of questions in backend, we send res(200) on 10th msg 

    fetch(`/bot/entry`, { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...user,
      })
    })
    .then(res=> res.json())
    .then(data => {
      setMsgList(data)
      console.log(data)
    })
      }
      console.log(messageReceived)
      setMessage('');
    })}
},[messageReceived])

//function 
  const sendMessage = (e) => { 
      e.preventDefault()
      setMessageReceived([...messageReceived,{message}])
  };

  return (
    <Wrapper>
      <Input
        rows={1}
        placeholder='Message...'
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <Button  onClick={sendMessage}>
        Send 
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
background-color: white;
`
const Input = styled.textarea`
width: 100%;
display: flex;
align-items: center;
line-height: 1.5;
width: 180px;
resize: none;
font-size: 15px;
color:black;
background: white;
border: 1px solid black;
outline: none;
border-radius: 10px;
padding: 5px 20px;
max-height: 100px;
min-height: 50px;
position:absolute;
bottom:0;
margin-bottom:5px;
`
const Button = styled.button`
position:absolute;
bottom:0;
right:0;
cursor: pointer;
border: 0;
border-radius: 10px;
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
export default SendMessage;