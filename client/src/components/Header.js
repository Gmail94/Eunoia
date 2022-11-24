import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../components/images/Logo.png"
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {

  const { isLoading, error, isAuthenticated } = useAuth0();

  return (
    <Wrapper>
      <NavBar>
        <Link to="/">
          <Logo src ={logo} alt="Enouia logo"/>
        </Link>
        <Link to="/about">About</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/services">Services</Link>
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <p>Loading...</p>}
        {!error && !isLoading && (
          <>
            {!isAuthenticated ? <p></p> : <Link to="/profile">Profile</Link>}
            <LoginButton />
            <LogoutButton />
          </>
        )}
      </NavBar>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
max-width: 98%;
`;

const Link = styled(NavLink)`
font-size: 26px;
text-decoration: none;
font-weight: 500;
transition: all 0.2s;
margin: 0 0.3em 0.3em 0;
&.active {
color: black;
}
&:hover {
    color: salmon;
}
`;
const Logo = styled.img`
`

const NavBar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border: 1px solid #d6d6d6;
border-radius: 10px;
width:100%;
padding: 25px 25px 0px 25px;
z-index: 10;
box-shadow: 0 2px 3px #292929, 0 0 77px white inset,

`;

