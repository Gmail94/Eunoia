import { useContext, useState } from "react";
import styled from "styled-components"
import { UserContext } from "../UserContext";
import Entries from "./Entries";
import Triggers from "./Triggers";

const Tabs = () => {

    const [tab, setTab] = useState(1);
    const { entry, setEntry, sortedEntry, setSortedEntry, sort, setSort } = useContext(UserContext);

    const toggleTab = (i) => {
        setTab(i);
    }

    const sortEntry =() => {
      const sortByDate = (a , b)=> {
          return (new Date (b.date) - new Date (a.date))
        }
      const sortedArray = entry.sort(sortByDate)
      setSortedEntry( sortedArray
      )
      setSort(!sort)
    }
    return(
        <Container>
          <Sort onClick={sortEntry}>Sort date in ascending/descending order</Sort>
        <BlocTab>
          <button
            className={tab === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
              Entries
          </button>
          <button
            className={tab === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Triggers
          </button>
        </BlocTab>
  
        <ContentTabs>
          <div
            className={tab === 1 ? "content  active-content" : "content"}
          >
            <Entries />
          </div>
  
          <div
            className={tab === 2 ? "content  active-content" : "content"}
          >
            <Triggers />
          </div>
        </ContentTabs>
      </Container>
    )
};

const Container = styled.div`
display: flex;
flex-direction: column;
position: relative;
width: 90%;
height: 50%;
background: #f1f1f1;
margin: 10px auto 0;
border: 1px solid rgba(0, 0, 0, 0.274);
`
const Sort = styled.button`
font-family: var(--font-body);
font-size:16px;
padding:15px 0 15px 0;
border:none;
background:
    linear-gradient(
    to right,
    lightgrey,
    lightgrey
),
    linear-gradient(
    to right,
    rgba(255, 0, 0, 1),
    rgba(255, 0, 180, 1),
    rgba(255, 0, 180, 1)
    
);
background-size: 100% 100%, 0 100%;
background-position: 100% 100%, 0 100%;
background-repeat: no-repeat;
transition: background-size 400ms;

&:hover{
    background-size: 0 75px, 100% 75px;
    color:white;
}

`
const BlocTab = styled.div`
display: flex;

button{
  font-family: var(--font-body);
}

.active-tabs  {
    font-family: var(--font-body);
    background: white;
    border-bottom: 1px solid transparent;
}
.active-tabs::before {
font-family: var(--font-body);
content: "";
display: block;
position: absolute;
top: -5px;
left: 50%;
transform: translateX(-50%);
width: calc(100% + 2px);
height: 10px;
background: salmon;
}
.tabs {
padding: 15px;
text-align: center;
width: 50%;
font-size:20px;
cursor: pointer;
border-bottom: 1px solid rgba(0, 0, 0, 0.274);
border:none;
box-sizing: content-box;
position: relative;
outline: none;
background:
    linear-gradient(
    to right,
    rgba(100, 200, 200, 1),
    rgba(100, 200, 200, 1)
),
    linear-gradient(
    to right,
    rgba(0, 100, 200, 1),
    rgba(255, 0, 180, 1),
    rgba(0, 100, 200, 1)
);
background-size: 100% 100%, 0 100%;
background-position: 100% 100%, 0 100%;
background-repeat: no-repeat;
transition: background-size 400ms;

&:hover{
    background-size: 0 75px, 100% 75px;
    color:white;
}

.tabs:not(:last-child){
border-right: 1px solid rgba(0, 0, 0, 0.274);
}
button {
border: none;
}
}
`
const ContentTabs = styled.div`
flex-grow : 1;
.content {
background: white;
padding: 20px;
width: 100%;
height: 100%;
display: none;
}
.content h2 {
padding: 0px 0 5px 0px;
}
.content hr {
width: 80%;
height: 2px;
background: #222;
margin-bottom: 5px;
}
.content p {
width: 100%;
height: 100%;
}
.active-content {
display: block;
}
`

export default Tabs; 
