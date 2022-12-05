import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { UserContext } from "../UserContext";

const Triggers = () => {

    const { entry, setEntry } = useContext(UserContext);

    return(
        <>
        {!entry ? 
        <Spinner>
            <AiOutlineLoading3Quarters
            className="spinner"
            style={{ width: "80px", height: "80px", color: "skyblue" }}
            />
        </Spinner> :
        <Wrapper>
            <h1>Triggers</h1>
            <hr />
            {entry.map((item, index)=>{
                if(item.trigger ){
                    return(
                        <div key={index}>
                            <Entry>
                            <Date>
                            {item.date}
                            </Date>
                                <>
                                {
                                item.feedback.map((response, index)=>{
                                    return(
                                        <div key={index}>
                                        <Question><Bold>Question:</Bold>{response.question}</Question>
                                        <Answer><Bold>Response:</Bold>{response.answer}</Answer>
                                        </div>
                                    )
                                })
                                }
                                </>
                            </Entry>
                        </div>
                        )
                }else{
                    return(
                        <></>
                    )
                }
                })
            }
        </Wrapper>
        }
    </>
    )
};
const Wrapper = styled.div`
padding: 0;
margin: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: var(--font-body);
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
const Entry = styled.div`
display:flex;
flex-direction: column;
align-items: left;
padding:15px;
box-shadow:5px 10px 9px 8px red;
border-radius: 10px;
height:350px;
width:800px;
margin-top: 20px;
text-decoration: none;
color:black;
background-color: white;
`
const Question = styled.div`

`
const Answer = styled.div`

`
const Date = styled.div`
font-weight:bolder;

`
const Bold = styled.div`
font-weight: bold;
text-decoration: underline;
`

export default Triggers;