import styled from "styled-components";
import {useState, useEffect} from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ZenQuote = () => {
    const [allQuotes, setAllQuotes]= useState(null);

    // useEffect for random quote
    useEffect(()=> {
        fetch("/api/zenquotes")
        .then(res=> res.json())
        .then(data=> {
            setAllQuotes(data.data[0]) //sets state to the random quote from ZenQuote API 
            })}, [])
    return(
        <Wrapper>
        {
        !allQuotes ? <Spinner><AiOutlineLoading3Quarters
        className="spinner"
        style={{ width: "50px", height: "50px", color: "skyblue" }}
        />
        </Spinner> :
        <Quote>"{allQuotes.q}" -  {allQuotes.a}</Quote>
        }
        </Wrapper>
    )
};
const Wrapper = styled.div`

`
const Spinner = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
left: 54%;
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
const Quote = styled.p`
font-size:25px;
display:inline-block;
text-align: center;
padding: 5px 10px;
border:none;
border-radius: 8px;
box-shadow:10px 15px 15px 10px #888888; 
/* background-color: rgba(255, 0, 0, 0.18); */
`

export default ZenQuote;
