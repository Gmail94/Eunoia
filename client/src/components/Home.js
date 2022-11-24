import styled from "styled-components";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import MH1 from "../components/images/MentalHealth.jpeg";

const Home = () => {
    const [allQuotes, setAllQuotes]= useState(null);
    
    const handleClick = () => {
        navigate("/about");
      }
    const navigate = useNavigate()


    // useffect for random quote
    // useEffect(()=> {
    //     fetch("/api/zenquotes")
    //     .then(res=> res.json())
    //     .then(data=> {
    //         setAllQuotes(data.data[0].q)
    //         console.log(data.data[0].q)
    //     })})
return(
    <>
    {/* {!allQuotes ? <h1>Loading...</h1>
    : */}
    <Wrapper>
        <Quote>"{allQuotes}"</Quote>
    <ImgWrapper>
        <Img src ={MH1} alt="Head with heart as brain" />
    </ImgWrapper>
    <Content>
    <h2>What is Enouia?</h2>
    <p>Enouia in greek means "well mind and beautiful thinking".
        <br />This platform's purpose is to raise awareness and promote information, 
        resources to help those who might need it. </p>
    </Content>
    <Stat>PLACEHOLDER for stat</Stat>
    <Link onClick ={handleClick}>Learn more about Mental Illness</Link>
    </Wrapper>
    {/* }  */}
    </>
)
};
const Wrapper = styled.div`

`

const Content = styled.h1`
position : absolute;
top: 20%;
left:40%; 
font-size: x-large;
padding: 5px;
h2{
margin-top: 70px; 
}
p{
font-weight: 100;
margin-top:30px;
line-height: 1.6;
}
`
const ImgWrapper = styled.div`
`
const Img = styled.img`
`
const Quote = styled.p`
font-size:20px;
display:inline-block;
text-align: center;
padding: 5px 10px;
border:none;
border-radius: 8px;
background-color: rgba(255, 0, 0, 0.18);
`
const Link = styled.div`
display:flex;
justify-content: center;
background-color: salmon;
color:white;
font-size: 30px;
padding: 20px 20px;
margin-bottom: 20px;
`
const Stat = styled.div`
border: 2px solid black;
border-radius: 10px;
height:200px;
width:500px;
`
export default Home;