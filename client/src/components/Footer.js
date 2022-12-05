import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai"
import {FcAbout} from "react-icons/fc"

const Footer = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Pages>
                <Title onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate("/");
                    }}>Home</Title>
                <Title onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate("/about");
                    }}>About</Title>
                <Title onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate("/articles");
                    }}>Articles</Title>
                <Title onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate("/services");
                    }}>Services</Title>
            </Pages>
            <Content>© Eunoia - 2022</Content>
            <Me>
                <Title onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate("/aboutme");
                }}><FcAbout />About me</Title>
                <Link href="http://linkedin.com/in/-liamgilmore" alt="liam's linkedIn" target="_blank">
                    <Title><AiOutlineLinkedin />LinkedIn</Title>
                </Link>
                <Link href="https://github.com/Gmail94" alt="liam's Github" target="_blank">
                    <Title><AiFillGithub />GitHub</Title>
                </Link>
            </Me>
        </Wrapper>
    )
};

const Wrapper = styled.div`
display: flex;
flex-direction: row;
background-color: #ffffff;
color: #4b4c4d;
font-family: var(--font-body);
border-radius: 15px;
text-decoration: none;
height: 50px;
position: relative;
bottom: 0%;
width: 100%;
opacity: 1;
box-shadow: 0 2px 3px #292929, 0 0 5px white inset,
            5px -5px 34px lightsalmon inset;
padding-top: 40px;
padding-bottom: 40px;
`

const Title = styled.h3`
display: flex;
justify-content: center;
font-size: 15px;
margin:5px;
&:hover{
    cursor: pointer;
    color:salmon;
}
`
const Pages = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
color: darkslategrey;
margin:0;
position: relative;
left:10%;
font-size: 12px;
`
const Content = styled.div`
position: absolute;
color: darkslategrey;
left: 50%;
font-size: 25px;

`
const Me = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
color: darkslategrey;
margin:0;
position: relative;
left:90%;
font-size: 12px;
`
const Link = styled.a`
text-decoration: none;
color: darkslategrey;
margin: 5px;
`
export default Footer; 