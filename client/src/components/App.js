import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Articles from "./Articles/Articles";
import Header from "./Header/Header";
import Services from "./Services";
import Footer from "./Footer";
import Profile from "./Profile/Profile";
import ChatBot from "./ChatBot/Chatbot";
import AboutMe from "./AboutMe";
import ArticleDetails from "./Articles/ArticleDetails";
import GlobalStyles from "./GlobalStyles";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useContext, useEffect} from "react";
import { UserContext } from "./UserContext";
import styled from "styled-components";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const App = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();
  const { edit,
    setEdit,
    profile, 
    setProfile, 
    hasLoaded, 
    setHasLoaded,
    triggered } = useContext(UserContext);
    const [isShown, setIsShown] = useState(false);

    const handleClick = (ev) => {
      // window.location.reload();
      //set it to true
      setIsShown(true);
    };

          useEffect(()=>{
          if(isAuthenticated){
            const userEmail = user.email;
            const bodyToSend = {email:userEmail}
            const options = {
              method: "POST",
              body: JSON.stringify(bodyToSend),
              headers: { 
                Accept: "application/json",
                "Content-Type": "application/json" 
              },
            };

            fetch("/user", options)
              .then((res)=> res.json())
              .then((data)=>{
                // console.log(data.data)
                setProfile(data.data)
                setHasLoaded(true)
              })
              .catch((err)=>{
              console.log(err)
              })
          }
        },[isAuthenticated, triggered])

  return (
    <BrowserRouter>
    <GlobalStyles />

    <Header />
      <Routes>
        <Route path ="/" exact element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/articles" element={<Articles />} />
        <Route path = "/articles/:itemId" element={<ArticleDetails />} />
        <Route path ="/services" element={<Services />} />
        <Route path = "/profile" element ={<Profile />} />
        <Route path ="/aboutme" element={<AboutMe />} />
      </Routes>
      {/* <button onClick={handleClick}>ChatBot</button>
      {isShown &&  */}
      <ChatWrap>
        <ChatBot />
      </ChatWrap>
      {/* } */}
      <Footer />
    </BrowserRouter>
  );
}

const ChatWrap = styled.div`
position:sticky;
right:0%;
bottom:0;
z-index: 900;
`

export default App;
