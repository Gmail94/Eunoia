import styled from "styled-components";
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const Articles = () => {

    const [articles, setArticles] = useState(null) //sets the state of articles to null

     // ~~~~ useEffect GET all articles ~~~~
  useEffect(() => { 
    fetch("/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.data);
      });
  }, []);

    return (
        <>
        {!articles ? 
        <Spinner>
            <AiOutlineLoading3Quarters
            className="spinner"
            style={{ width: "80px", height: "80px", color: "skyblue" }}
            />
        </Spinner> :
        <Wrapper>
            <Title>Latest News</Title>
            {articles.map((items, index) =>{
                return (
                    <Article to={`/articles/${items._id}`} key={Math.floor(Math.random() * 1400000000)}>
                    <ArticleImg src={items.imgSrc} />
                    <ArticleInfo>
                        <ArticleTitle>{items.title}</ArticleTitle>
                        <Sum>{items.summary}</Sum>
                        <p>Click for full Article</p>
                    </ArticleInfo>
                </Article>
                )
            })}
        </Wrapper>
        }
        </>
    )
};

const Wrapper = styled.div`
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
const Title = styled.h1`
font-family:var(--font-body);
color: black;
font-size: 50px;
padding-bottom: 15px;
position: relative;
text-shadow:0px 4px 3px rgba(0,0,0,0.4),
            0px 8px 13px rgba(0,0,0,0.1),
            0px 18px 23px rgba(0,0,0,0.1);
:before{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 5px;
    width: 250px;
    background-color: #111;
}
:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 2px;
    height: 1px;
    width: 95%;
    max-width: 800px;
    background-color: #333;
}
`
const Article = styled(Link)`
display:flex;
align-items: center;
box-shadow:5px 10px 9px 8px #888888;
border-radius: 10px;
height:200px;
width:800px;
margin-top: 20px;
text-decoration: none;
color:black;
background-color: white;
`
const ArticleImg = styled.img`
border-radius:10px;
width:150px;
height:150px;
margin:5px;
box-shadow:2px 15px 15px 2px #888888;
`
const ArticleTitle = styled.div`
font-weight: bolder;
font-size: 26px;
`
const Sum = styled.p`
`
const ArticleInfo = styled.div`
display:flex;
flex-direction: column;
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
export default Articles;