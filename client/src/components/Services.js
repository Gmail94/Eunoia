import styled from "styled-components";
import talkspace from "./images/Talkspace-logo.original.jpg";
import moodfit from "./images/moodfit_mv2.png";
import mindshift from "./images/MindShift.jpeg"
import appstore from "./images/appstore.png";
import googleplay from "./images/google.png"


const Services = () => {

    return(
        <Wrapper>
        <h1>Mental Health Support : Get Help</h1>
        <Service>
            <h3>Euonia's Services</h3>
            <p>When signed into a profile, a chat becomes available.</p>
            <p>This chat allows you to log your emotions day to day or moment to moment.</p>
            <p>These entries are then posted to your profile.</p>
            <p>you can think of this feature a your own mental health blog or diary.</p>
            <p>Another feature is that you can categorize your entries by triggers.</p>
        </Service>
        <HelpLink>
        <h3>Free and confidential mental health and substance use support is available 24 hours a day, 7 days a week from Wellness Together Canada.</h3>
        <a href="https://www.wellnesstogether.ca/en-CA?lang=en-ca" target="_blank" rel="noreferrer">
        <Button>Get support</Button>
        </a>
        </HelpLink>
        <Info>
        <p>You can talk to a mental health professional one on one. Call 1-866-585-0445 or text WELLNESS to:</p>
        <ul>
            <li> 686868 for youth</li>
            <li> 741741 for adults</li>
        </ul>
        <h3>If you're in a crisis</h3>
        <p>If you're in immediate danger or need urgent medical support, call 911.</p>
        <p>If you or someone you know is thinking about suicide, call Talk Suicide Canada at 1-833-456-4566.<br /> 
            Support is available 24 hours a day, 7 days a week.</p>
        <p>For residents of Quebec, call 1-866-277-3553 (24/7) or visit suicide.ca/en.</p>
        <br />
        </Info>
        <h2>Counselling Apps</h2>
        <Apps>
            <App>
                <h3>Talkspace</h3>
                <a href="https://www.talkspace.com/" 
                    alt="facespace website" 
                    target="_blank" 
                    rel="noreferrer">
                <Logo src ={talkspace} alt="talkspace logo" />
                </a>
                <p>Connect with a licensed therapist from the palm of your hand, and experience the most convenient, 
                    affordable way to improve your mental health. Start today.</p>
                <a href ="https://apps.apple.com/ca/app/talkspace-therapy-counseling/id661829386" 
                    alt="talk space app store link" 
                    target="_blank" 
                    rel="noreferrer">
                    <Appstore src = {appstore} alt = "app store logo" />
                </a>
                <a href ="https://play.google.com/store/apps/details?id=com.talkspace.talkspaceapp" 
                    alt="talk space android link" 
                    target="_blank" 
                    rel="noreferrer">
                    <Android src = {googleplay} alt="google play logo" />
                </a>
            </App>
            <App>
                <h3>Moodfit</h3>
                <a href="https://www.getmoodfit.com/" 
                    alt="mood fit logo"
                    target="_blank" 
                    rel="noreferrer">
                <Logo src ={moodfit} alt="mood fit logo" />
                </a>
                <p>Moodfit is a highly-rated app designed to reduce anxiety, 
                    depression and high levels of stress to ultimately “shape up” your mood. 
                    This app works by choosing daily goals you wish to accomplish and offers a small activity to complete based on the goal.</p>
                <a href ="https://apps.apple.com/ca/app/moodfit-mental-health-fitness/id1054458809" 
                    alt="mood fit app store link" 
                    target="_blank" 
                    rel="noreferrer">
                <Appstore src = {appstore} alt = "appstore logo" />
                </a>
                <a href ="https://play.google.com/store/apps/details?id=com.robleridge.Moodfit" 
                    alt="mood fit android link" 
                    target="_blank" 
                    rel="noreferrer">
                    <Android src = {googleplay} alt="google play logo" />
                </a>
            </App>
            <App>
                <h3>MindShift</h3>
                <a href="https://www.anxietycanada.com/resources/mindshift-cbt/?gclid=CjwKCAiA7IGcBhA8EiwAFfUDsTcL3EaUIF4eZg5MstVEzmwry0zijQx0cxIgxzVJsu_ZCpleS1VYqhoCWuEQAvD_BwE" 
                    target="_blank" 
                    rel="noreferrer">
                <Logo src ={mindshift} alt="talkspace logo" />
                </a>
                <p>MindShift CBT is a free self-help anxiety relief app, that helps you reduce worry, stress, and panic. 
                    Using CBT tools, you can challenge negativity, learn more about anxiety, develop more effective ways of thinking, be mindful, and relax.</p>
                <a href ="https://apps.apple.com/ca/app/mindshift-cbt-anxiety-relief/id634684825" 
                    alt="mind shift app store link" 
                    target="_blank" 
                    rel="noreferrer">
                    <Appstore src = {appstore} alt = "appstore logo" />
                </a>
                <a href ="https://play.google.com/store/apps/details?id=com.bstro.MindShift" 
                    alt="mind shift android link" 
                    target="_blank" 
                    rel="noreferrer">
                    <Android src = {googleplay} alt="google play logo" />
                </a>
            </App>
        </Apps>
        </Wrapper>
    )
};

const Wrapper = styled.div`
font-family: var(--font-body);
height:95%;

h1{
display:flex;
justify-content: center;
color:white;
font-size: 35px;

padding:15px;
color:white;
background-image: linear-gradient(to left, #553c9a, #b393d3);
text-shadow:0px 4px 3px rgba(0,0,0,0.4),
            0px 8px 13px rgba(0,0,0,0.1),
            0px 18px 23px rgba(0,0,0,0.1);
}

h2{
    display:flex;
    justify-content: center;
    text-decoration: underline;
}
h3{
    font-size:24px;
}
`
const Service = styled.div`
margin-left:20px;

h3{
    text-decoration: underline;
}
`
const Info = styled.div`
margin-left:20px;
font-size: large;
`
const Apps = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
`
const App = styled.div`
width:350px;
height:450px;
background-color: white;
border-radius: 10px;
margin:15px;
display:flex;
flex-direction: column;
align-items: center;
box-shadow:5px 10px 9px grey;
p{
    margin:8px;
}
`
const Appstore = styled.img`
width:120px; 
transition: transform .2s;
&:hover{
    transform: scale(1.05);
}
`
const Android = styled.img`
width:120px;
transition: transform .2s;
&:hover{
    transform: scale(1.05);
}
`
const Button = styled.button`
background-color: lightgrey;
padding:15px 10px;
color: black;
border:0.5px solid black;
border-radius: 4px;
font-size:25px;
cursor:pointer;
box-shadow:2px 5px 4px grey;
transition: all 0.5s ease;

&:hover{
    background: green;
    color:white
}
`
const HelpLink = styled.div`
background-color:#fcf3fc;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
padding:10px;
width:100%;
`
const Logo = styled.img`
width:125px;
height:125px;
object-fit:contain;
border-radius:50%;
box-shadow:5px 10px 9px #888888;
transition: transform .2s;
&:hover{
    transform: scale(1.1);
}
`

export default Services;