import styled from "styled-components";

const Background = () => {

return(
    <BackgroundStyle />
)
};

const BackgroundStyle = styled.div`
width:auto;
height: auto;
position:absolute;
z-index: -2;
background: linear-gradient(-45deg, #f5d5cc, #f9d2e1, #d3eff8, #d3f8ef);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
`

export default Background;