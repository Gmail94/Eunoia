import styled from "styled-components";
import  { useNavigate } from "react-router-dom";
import YoutubeEmbed from "./YoutubeEmbed";

const About = () => {

    const handleClick = () => {
        navigate("/services"); //handles navigation to services page
      }
    const navigate = useNavigate()

    return(
        <>
        <Wrapper>
        <Title>Key Facts About Mental Illness</Title>
        <Container>
        <Text>Mental illness is a highly prevalent, life-threatening disease that affects millions of people around the world. It is a disease that:</Text>
        <List>
            <li>
                 Strikes people of all ethnic groups, religions and economic brackets.
            </li>
            <li>
                Strikes the young, and often goes undiagnosed and untreated for many years.
            </li>
            <li>
                Has a staggering impact on the global economy.
            </li>
        </List>
        <Text>
            However, mental illness IS treatable. There is hope for people who have it.
        </Text>
        <ul>
            <li>
            People can recover from mental illness with good treatment and, most importantly, a reliable support system of other people and services.
            </li>
        </ul>
        </Container>
            <Title>What is Mental Health?</Title>
            <Container>
            <Text>Mental health includes our emotional, psychological, and social well-being.</Text>
            <Text>It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices.</Text><br/>
            <Text>Mental health is important at every stage of life, from childhood and adolescence through adulthood.</Text>
            <Text>Mental health problems are common but <Help onClick={handleClick}>help is available.</Help> <br />
            People with mental health problems can get better and many recover completely.</Text>
        </Container>
        <YoutubeEmbed embedId="DxIDKZHW3-E"/> 
        </Wrapper>
        </>
    )
}
const Wrapper = styled.div`
font-family: var(--font-body);
`

const Title = styled.h1`
display:flex;
justify-content: center;
margin:0;
color:white;
font-size: 35px;
padding: 30px;
background-image: linear-gradient(to left, #553c9a, #b393d3);
text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1);
`

const Help = styled.span`
color:blue;
text-decoration: underline;
cursor:pointer;
`
const List = styled.ul`
margin-left: 20px;
`
const Container = styled.div`
margin:30px;

`
const Text = styled.span`
font-size:20px;
line-height: 1.6;
`
export default About;
