import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { UserContext } from "../UserContext";
import Entry from "./Entry";
import SortedEntry from "./SortedEntry";

const Entries = () => {

    const { entry, setEntry, sortedEntry, sort } = useContext(UserContext);

    useEffect(() => { 
        fetch("/entries")
          .then((res) => res.json())
          .then((data) => {
            setEntry(data.data);
          });
      }, []);

return(
    <>
        {!entry ? 
            <Spinner>
                <AiOutlineLoading3Quarters
                className="spinner"
                style={{ width: "80px", height: "80px", color: "skyblue" }}
                />
            </Spinner> 
            :
            <Wrapper>
                <h1>Entries</h1>
                <hr />
                {sort ? 
                    <SortedEntry />
                :
                    <Entry />
                }
            </Wrapper>
        }
    </>
)
};

const Wrapper = styled.div`
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

export default Entries;