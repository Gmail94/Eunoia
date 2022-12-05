import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import TriggerBtn from "./TriggerBtn";

const SortedEntry = () =>{

    const {entry, sortedEntry} = useContext(UserContext)
    
    return(
        <>{
            sortedEntry.map((item, index)=>{
                return(
                    <div key={index}>
                        <EntryList>
                            <Date>
                            {item.date}
                            </Date>
                            <>
                            {item.feedback.map((response, index)=>{
                                return(
                                    <div key={index}>
                                    <Question><Bold>Question:</Bold>{response.question}</Question>
                                    <Answer><Bold>Response: </Bold>{response.answer}</Answer>
                                    </div>
                                )
                            })
                            }
                            </>
                            <ButtonContainer>
                                <TriggerBtn />
                            </ButtonContainer>
                        </EntryList>
                    </div>
                    )
                })
                }</>
            )
        };

        const EntryList = styled.div`
        display:flex;
        flex-direction: column;
        align-items: left;
        padding:15px;
        font-family: var(--font-body);
        box-shadow:5px 10px 9px 8px #888888;
        border-radius: 10px;
        height:400px;
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
        const ButtonContainer = styled.div`
        display:flex;
        align-items: center;
        `
        
        const Date = styled.div`
        font-weight:bolder;

        `

        const Bold = styled.div`
        font-weight: bold;
        text-decoration: underline;
        `

        export default SortedEntry;