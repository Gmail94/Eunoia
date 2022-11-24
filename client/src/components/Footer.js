import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Pages>
                <Title onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate("/");
                    }}>Home</Title>
                <Title onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate("/about");
                    }}>About</Title>
                <Title onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate("/articles");
                    }}>Articles</Title>
                <Title onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate("/services");
                    }}>Services</Title>
            </Pages>
            <Content>© Eunoia - 2022</Content>
        </Wrapper>
    )
}

export default Footer; 

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 3px #292929, 0 0 77px white inset;
    border: 1px solid #d6d6d6;
    border-radius: 10px;
    max-width: 100%;
    bottom: 0;
`;

const Title = styled.h3`
font-weight: 700;
font-size: 16px;
margin-top: 10px;
&:hover{
    cursor: pointer;
    color:salmon;
}
`
const Pages = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
color: darkslategrey;
margin:0;
position: relative;
left:10%;
font-size: 12px;
`
const Content = styled.div`
position: absolute;
color: darkslategrey;
left: 50%;
font-size: 25px;
`;