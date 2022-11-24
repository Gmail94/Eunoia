import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <Wrapper>
      <UserInfo>
        {user?.picture && <Avatar src={user.picture} alt={user.name} />}
        <Name>{user.name}</Name>
        <p>{user.email}</p>
      </UserInfo>
      </Wrapper>
    )
  );
};
const Wrapper = styled.div`
height:80vh;
`
const UserInfo = styled.div`
box-shadow:5px 10px 9px #888888;
display: flex;
flex-direction:column;
align-items: center;
height:250px;
width:300px;
border-radius: 10px;
`
const Avatar = styled.img`
border-radius: 50%; 
height:100px;
width:90px;
box-shadow:5px 10px 9px #888888;
`
const Name = styled.h2`
margin-top:40px;
`

export default Profile;

