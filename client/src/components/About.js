import styled from "styled-components";
import  { useNavigate } from "react-router-dom";

const About = () => {

    const handleClick = () => {
        navigate("/services");
      }
    const navigate = useNavigate()

    return(
        <>
        <Title>Key Facts About Mental Illness</Title>
        <Text>Mental illness is a highly prevalent, life-threatening disease that affects millions of people around the world. It is a disease that:</Text>
        <ul>
            <li>
                Strikes people of all ethnic groups, religions and economic brackets.
            </li>
            <li>
                Strikes the young, and often goes undiagnosed and untreated for many years.
            </li>
            <li>
                Has a staggering impact on the global economy.
            </li>
        </ul>
        <Text>
            However, mental illness IS treatable. There is hope for people who have it.
        </Text>
        <ul>
            <li>
            People can recover from mental illness with good treatment and, most importantly, a reliable support system of other people and services.
            </li>
        </ul>
        <div>
            <Title>What is Mental Health?</Title>
            <Text>Mental health includes our emotional, psychological, and social well-being.</Text>
            <Text>It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices.</Text>
            <Text>Mental health is important at every stage of life, from childhood and adolescence through adulthood.</Text>
            <Text>Mental health problems are common but <Help onClick={handleClick}>help is available.</Help> <br />
            People with mental health problems can get better and many recover completely.</Text>
        </div>
        </>
    )
}

const Title = styled.h1`
display:flex;
justify-content: center;
background-color: salmon;
color:white;
font-size: 35px;
padding: 30px;
`

const Help = styled.p`
color:blue;
text-decoration: underline;
cursor:pointer;
`

const Text = styled.p`
font-size:20px;
`
export default About;
