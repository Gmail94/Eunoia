import { useAuth0 } from '@auth0/auth0-react';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { UserContext } from '../UserContext';

const EditProfile =() => {
    const { user } = useAuth0();
    const {edit, setEdit} = useContext(UserContext);
    const [nickname, setNickname] = useState(null);
    const [bio, setBio] = useState(null);

// PATCH of user info - nickname and bio are being edited 
const patchReq =(ev) => {
    ev.preventDefault()
    fetch("/users" , {
    "method": "PATCH", 
    "headers" : {
        "Content-Type": "application/json"
    },
    "body" : JSON.stringify({
        "email":user.email,
        "nickname":nickname, 
        "bio":bio
    })
    })
    setEdit(false)
    }
    const refreshPage = ()=>{
        window.location.reload();
        window.scrollTo(0, 0);
    }

    return(
        <Form onSubmit={patchReq}>
        <FlexRow><Title>Editing</Title></FlexRow>
        <FlexRow><div>Nick Name:</div><Input onChange={(ev) => setNickname(ev.target.value)}></Input></FlexRow>
        <FlexRow><div>Bio:</div><TextBox onChange={(ev) => setBio(ev.target.value)}></TextBox></FlexRow>
        <Button onClick={refreshPage} type="submit">Submit</Button>
        </Form>
    )
}

const Form = styled.form`
display:table;
flex-direction:column;
box-shadow:6px 10px 9px 8px #888888;
display: flex;
flex-direction:column;
align-items: center;
height:380px;
width:300px;
border-radius: 10px;
text-align: left;
`
const FlexRow = styled.div`
display:flex;
flex-direction: row;
margin:5px;
`
const Input = styled.input`
display: table-cell;
`
const TextBox = styled.textarea`
`
const Button = styled.button`
display:flex;
align-items: center;
justify-content: center;
cursor: pointer;
border: 0;
border-radius: 4px;
font-weight: 600;
margin: 0 10px;
width: 100px;
padding: 10px 0;
box-shadow: 0 0 20px rgba(104, 85, 224, 0.2);
transition: 0.4s;
background-color: red;
box-shadow: 0 2px 3px #292929, 0 0 23px white inset;
color: white;
transition: transform .2s;
&:hover{
    transform: scale(1.05);
}
`
const Title = styled.h1`
`

export default EditProfile; 