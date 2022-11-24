import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Articles from "./Articles";
import Header from "./Header";
import Services from "./Services";
import SignIn from "./SignIn";
import Footer from "./Footer";
import Profile from "./Profile";
import ChatBot from "./ChatBot/Chatbot";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/articles" element={<Articles />} />
        <Route path ="/services" element={<Services />} />
        <Route path ="/signin" element ={<SignIn />} />
        <Route path = "/profile" element ={<Profile />} />
      </Routes>
      <ChatBot />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
