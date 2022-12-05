import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { io } from "socket.io-client"

const Messages = ({ messageReceived, setMessageReceived }) => { //passed as props in chatbot

  // Runs whenever a socket event is received from the server
  useEffect(() => {
    const socket = io('http://localhost:8000')
    socket.on('receive_message', (data) => { 
      setMessageReceived((state) => [
        ...state,
        {
          message: data.message,
        },

      ].slice(1)); //slices first empty chat bubble on render
    });

	// Remove event listener on component unmount
    return () => socket.off('receive_message');
  }, []);

//mapping through ([data.message])
  return (
    <StyledMsgs >
      {messageReceived && messageReceived.map((msg, i) => (
        <Content key={i}>
          <div>
          </div>
          <SentMsg>{msg.message}</SentMsg>
          <br />
        </Content>
      ))}
    </StyledMsgs>
  );
};

const StyledMsgs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 200px 16px, 200px;
  background-color: white;
  color: black;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 2px;
  }
`
const SentMsg = styled.p`
display:inline-flex;
flex-direction: row-reverse;
align-self: flex-end;
margin-bottom: 16px;
padding:2px 3px;
border-radius: 15px;
border:1px solid black;
border-top-right-radius: 2px;
border-top-left-radius: 16px;
background-color: white;
color: black;
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
            rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`
const Content = styled.div`

`

export default Messages;