import styled from "styled-components";
import { useContext, useState } from "react";
import { UserContext } from "../UserContext";

const TriggerBtn = () => {

    const [triggered, setTriggered] = useState(false);
    const { entry, setEntry} = useContext(UserContext);

    // function that PATCHES the trigger key to be able to send data to trigger tab in profile
    const handleTrigger =()=> {
        if(entry){
            
        fetch("/trigger" , {
            "method": "PATCH", 
            "headers" : {
                "Content-Type": "application/json"
            },
            "body" : JSON.stringify({
                "_id":entry[0]._id, 
                "trigger":true,

            })
            })
        setTriggered(!triggered)
        window.location.reload(); // reloads so that PATCH will appear 
        window.scrollTo(0, 0);
        }
    };
    return(
        <>
        { entry ? 
        <Triggers onClick={handleTrigger}
                            style = {{backgroundColor: entry[0].trigger ? "red" : "white"}}
                            >Trigger</Triggers>
        : <h1>Loading...</h1>}
        </>
    )
};

const Triggers = styled.button`
cursor:pointer;
width:100px;
color: white;
border-radius:8px;
padding:5px 10px;
background-color: red;
animation-name: color;
animation-duration: 6s;
animation-iteration-count: infinite;
margin-top:40px;
font-family:var(--font-body);

@keyframes color {
    0% {
    background-color: red;
    }
    50% {
    background-color: white;
    color:black;
    }
    100% {
    background-color: red;
    }
}
`

export default TriggerBtn;