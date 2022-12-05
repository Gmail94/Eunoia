import styled from "styled-components";
import ZenQuote from "./Home/ZenQuote";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai"


const AboutMe = () => {
    
    return(
        <Wrapper>
            <h1>About me</h1>
            <AboutTitle>Hello! I'm Liam!</AboutTitle>
            <P> I'm a student in Concordia's Full-Stack Web Development Bootcamp.</P>
            <P> I have recently made a career change as I have a bachelor's degree in Psychology from Concordia University.</P> 
            <P>I'm using this opportunity to combine my Psychology background and implement it into an application. </P>
            <Content>
            <Button onClick={() => window.location = 'mailto:liamgilmore1@gmail.com'}>Contact Me <AiOutlineMail style={{padding:"5px"}} /></Button> 
            <Link href="http://linkedin.com/in/-liamgilmore" alt="liam's linkedIn" target="_blank">
                    <Title>
                        <AiOutlineLinkedin style={{width:"15px", height:"15px"}}/>
                        LinkedIn
                    </Title>
            </Link>
                <Link href="https://github.com/Gmail94" alt="liam's Github" target="_blank">
                    <Title>
                        <AiFillGithub style={{width:"15px", height:"15px"}}/>
                        GitHub
                    </Title>
                </Link>
            </Content>
            <ZenQuote />
        </Wrapper>
    )
}

const Wrapper = styled.div`
font-family: var(--font-body);
z-index: 3;
padding: 20px 60px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media (max-width: 650px) {
    margin-top: -20px;
    width: 90%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
h1{
    margin: auto;
    color: white;
    font-size: 60px;
}
`

const AboutTitle = styled.h2`
text-align: center;
color:black;
font-size: 32px;
`
const P = styled.p`
color:black;
font-size: 24px;
text-align: justify;
margin-top: 0;
@media (max-width: 650px) {
    width: 80%;
}
`
const Button = styled.button`
display:flex;
align-items: center;
justify-content: center;
border-radius: 15px;
border: none;
box-shadow:5px 10px 9px grey;
background-color: salmon;
height: 45px;
width: 175px;
font-size: 24px;
margin-bottom: 30px;
color: white;
:hover {
    opacity: 70%;
    cursor: pointer;
    }
`
const Link = styled.a`
text-decoration: none;
color: darkslategrey;
`
const Title = styled.h3`
display:flex;
justify-content: center;
font-weight: 700;
font-size: 15px;
&:hover{
    cursor: pointer;
    color:salmon;
}
`
const Content = styled.div`

`

export default AboutMe;