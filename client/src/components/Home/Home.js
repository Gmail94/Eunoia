import styled from "styled-components";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import MH1 from "../images/MentalH.png";
import { useAuth0 } from "@auth0/auth0-react";
import Stat from "./Stat";
import ZenQuote from "./ZenQuote";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Home = () => {
    const [articles, setArticles] = useState(null);
    const { user, isAuthenticated, isLoading } = useAuth0();
    
    const handleClick = () => { //function to navigate to about page
        navigate("/about");
        window.scrollTo(0, 0);
      }
      const handleArticle = (e, _id) => {
        e.preventDefault();
        navigate(`/articles/${articles._id}`); //function to navigate to specific article details page by article Id
        e.stopPropagation();
    }
    const navigate = useNavigate()

        useEffect(() => {  // GET request to retrieve all articles
            fetch("/articles")
              .then((res) => res.json())
              .then((data) => {
                let random = Math.floor(Math.random() * data.data.length) //sets article to random article in database 
                setArticles(data.data[random]);

              });
          }, []);

return(
    <>
    <Wrapper>
      <ZenQuote /> 
      <Content>
        <ImgWrapper>
          <Img src ={MH1} alt="Head with heart as brain" />
        </ImgWrapper>
        <Text>
          <h1>What is Eunoia? [eff-ni-ah]</h1>
          <p>Eunoia in greek means "well mind and beautiful thinking".
          <br />This platform's purpose is to raise awareness and promote information, 
              resources to help those who might need it. </p>
        </Text>
      </Content>
      <h2>Featured Article</h2>
      <Info>
        {!articles ? 
        <Spinner>
          <AiOutlineLoading3Quarters
            className="spinner"
            style={{ width: "80px", height: "80px", color: "skyblue" }}
          />
        </Spinner> :
          <Article onClick={handleArticle}>
            <ArticleImg src={articles.imgSrc} />
            <ArticleInfo>
              <ArticleTitle>{articles.title}</ArticleTitle>
              <Sum>{articles.summary}</Sum>
              <div>Click to read more</div>
            </ArticleInfo>
          </Article>
}
        <Stat />
        </Info>
        <Links onClick ={handleClick}>Learn more about Mental Illness</Links>
    </Wrapper>
    </>
)
};
const Wrapper = styled.div`
font-family: var(--font-body);
display:flex;
flex-direction: column;
align-items: center;

h2{
  margin-left:-550px;
  font-size:40px;
  margin-bottom: -50px;
}
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

const Content = styled.h1`
display:flex;
flex-direction: row;
top: 20%;
left:40%; 
font-size: x-large;
padding: 5px;
h2{
margin-top: 70px; 
}
p{
font-weight: 100;
margin-top:30px;
line-height: 1.6;
}
`
const ImgWrapper = styled.div`
margin-top: 25px;
width:50%;
`
const Img = styled.img`
`
const Text = styled.div`
display:flex;
flex-direction: column;
`
const Links = styled.div`
display:flex;
width:100%;
justify-content: center;
color:salmon;
font-size: 30px;
padding: 20px 20px;
margin-bottom: 20px;
margin-top: 10px;
cursor:pointer;
background:
    linear-gradient(
      to right,
      rgba(100, 200, 200, 1),
      rgba(100, 200, 200, 1)
    ),
    linear-gradient(
      to right,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 180, 1),
      rgba(0, 100, 200, 1)
  );
  background-size: 100% 5px, 0 10px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
    &:hover{
        background-size: 0 75px, 100% 75px;
        color:white;
    }
`
const Article = styled.div`
display:flex;
align-items: center;
cursor:pointer;
box-shadow:5px 10px 9px 8px #888888;
border-radius: 10px;
height:250px;
width:800px;
background-color: white;
font-family: Arial, Helvetica, sans-serif;
`
const ArticleImg = styled.img`
display: flex;
align-items: center;
border-radius:10px;
margin:5px;
width:150px;
height:150px;
background-color: grey;
box-shadow:2px 15px 15px 2px #888888;
`
const ArticleTitle = styled.h3`
font-size:25px;
margin-top: -10px;
`
const Sum = styled.p`
font-size:20px;
`
const ArticleInfo = styled.div`
margin: 10px;
`
const Info = styled.div`
display: flex;
flex-direction:row;
justify-content: space-between;
margin:50px;
`

export default Home;