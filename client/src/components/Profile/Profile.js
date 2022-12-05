import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useContext} from "react";
import Tabs from "../Tabs/Tabs";
import EditProfile from "./EditProfile";
import { UserContext } from "../UserContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { edit,
        setEdit,
        profile, 
        setProfile } = useContext(UserContext);
    const [ hasLoaded, setHasLoaded] = useState(false);
  
  if (isLoading) {
    return 
    <Spinner>
      <AiOutlineLoading3Quarters
    className="spinner"
    style={{ width: "80px", height: "80px", color: "skyblue" }}
/>
</Spinner>;
  }

  const toggleEdit = () => {
    if(edit === true) {
      setEdit(false)
    } else {
      setEdit(true)
    }
  }
  return (
    <>
      <Container>
      {profile !== null ?
          isAuthenticated && edit ? 
            <Wrapper>
              <EditProfile /> 
              <Button onClick={toggleEdit}>Edit</Button>
            </Wrapper>
            : (
            <Wrapper>
              <UserInfo>
                {user?.picture && <Avatar src={user.picture} alt={user.name} />}
                <Name>{user.name}</Name>
                <p>@{profile.nickname}</p>
                <p>Email: {user.email}</p>
                <Bio>Bio: {profile.bio}</Bio>
              </UserInfo>
              <Button onClick={toggleEdit}>Edit</Button>
              <TriggerDef>In mental health terms, a trigger refers to something that affects your emotional state, often significantly, by causing extreme overwhelm or distress. 
                A trigger affects your ability to remain present in the moment.
                It may bring up specific thought patterns or influence your behavior.<br />
                Keep tabs on your triggers and add them to your trigger log by using the trigger button.</TriggerDef>
          </Wrapper>
            )
      : <h1>Loading...</h1>
      }
      <Tabs />
      </Container>
      </>
      );
    
  };
const Wrapper = styled.div`
padding: 0;
margin: 0;
font-family: var(--font-body);
display: flex;
flex-direction: column;
align-items: center;
`
const UserInfo = styled.div`
box-shadow:6px 10px 9px 8px #888888;
display: flex;
flex-direction:column;
align-items: center;
height:400px;
width:300px;
border-radius: 10px;
background-color: white;
margin-left:20px;
margin-right: 20px;
`
const Bio = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin:2px 25px;
`
const Avatar = styled.img`
margin-top:10px;
border-radius: 50%; 
height:100px;
width:90px;
box-shadow:5px 10px 9px #888888;
object-fit: cover;
`
const Name = styled.h2`
margin-top:40px;
`

const Button = styled.button`
cursor: pointer;
border: 0;
border-radius: 4px;
font-weight: 600;
font-size: 12px;
margin-top: -40px;
width: 70px;
padding: 10px 0;
box-shadow: 0 0 20px rgba(104, 85, 224, 0.2);
transition: 0.4s;
background-color: blue;
box-shadow: 0 2px 3px #292929, 0 0 23px white inset;
color: white;
transition: transform .2s;
&:hover{
    transform: scale(1.05);
}
`
const Container = styled.div`
padding: 0;
margin: 0;
display: flex;
flex-direction: row;
justify-content: center;
`
const Spinner = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
left: 4%;
.spinner {
    animation: spin infinite 4s linear;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
const TriggerDef = styled.div`
margin-top:40px;
width:300px;
border-radius: 10px;
margin-left:20px;
`

export default Profile;

