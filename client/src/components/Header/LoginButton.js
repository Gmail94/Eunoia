import styled from "styled-components"
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect,isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && ( //Auth0 validates user 
    <Button onClick={() => loginWithRedirect()}>
        Sign In
    </Button>
    )
    )
};

const Button = styled.button`
cursor: pointer;
border: 0;
border-radius: 4px;
font-weight: 600;
margin: 0 10px;
width: 150px;
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

export default LoginButton;