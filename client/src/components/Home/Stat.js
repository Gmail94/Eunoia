import styled from "styled-components";
import {useState, useEffect} from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Stat = () => {
    const [stats, setStats] = useState(null);

    // every re rerender will generate new stat
    useEffect(() => { 
        fetch("/stats") // GET request to retrieve stats collection in database 
          .then((res) => res.json())
          .then((data) => {
            let random = Math.floor(Math.random() * data.data.length) // picks random stat from stat collection in database
            setStats(data.data[random]); // sets state to 1 random stat
          });
      }, []);

    return(
        <>
        {!stats ? <Spinner><AiOutlineLoading3Quarters
            className="spinner"
            style={{ width: "80px", height: "80px", color: "skyblue" }}
        /></Spinner> :
        <StatWrap>
            <img src ={stats.imgSrc} />
            <StatsInfo>
                <p>{stats.stat}</p>
                <span> -{stats.author}</span>
            </StatsInfo>
        </StatWrap>
        }
        </>
    )
};

const StatWrap = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-left: 50px;
box-shadow:0 0.2rem 0.5rem rgba(0, 0, 0, 0.15);
border-radius: 10px;
height:270px;
width:600px;
background-color: rgb(238, 238, 238);
box-shadow:5px 10px 9px 8px #888888;

img{
    width:200px;
    height:140px;
    margin:5px;
    border-radius: 5px;
    box-shadow:2px 15px 15px 2px #888888; 
}
p{
    font-size:28px;
    margin:5px
}
`
const StatsInfo = styled.div`
display: flex;
flex-direction: column;
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

export default Stat;