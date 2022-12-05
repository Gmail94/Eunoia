import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState} from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ArticleDetails = () => {
    const { itemId } = useParams(); //use Params for specific article Id
    const [ article, setArticle ] = useState(null); // state for article
    const [paragraphs, setParagraphs] = useState([]); // setting the paragraphs state to an empty array
    
    useEffect(() => { 
        fetch(`/articles/${itemId}`) //GET fetch to retrieve article with specific Id from the database
          .then((res) => res.json())
          .then((data) => {
            setArticle(data.data); // sets state to the data = the entire article array
            setParagraphs(data.data.paragraphs) // sets state to the paragraph key to target specific key of paragraphs
          });
      }, []);
    
    return(
        <>
        {!article ?  //loading state while fetch returns article
        <Spinner>
            <AiOutlineLoading3Quarters
            className="spinner"
            style={{ width: "80px", height: "80px", color: "skyblue" }}
            />
        </Spinner> :
        <Wrapper>
            <Article>
                <ArticleInfo>
                    <ArticleTitle>{article.title}</ArticleTitle>
                    <Sum>{article.summary}</Sum>
                    <hr />
                    <>
                    {paragraphs.map((paragraph, index)=>{
                        return(
                            <>
                            <div key = {index}> 
                                <div>{paragraph[0]}</div>
                                <div>{paragraph.subheading}</div>
                                <Content>{paragraph.text}</Content>
                            </div>
                            <Source href={paragraph.url} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    alt="site link">
                                        {paragraph.url}
                            </Source>
                            </>
                        )
                    })
                    }
                    </>
                </ArticleInfo>
                <ArticleImg src ={article.imgSrc} />
            </Article>
        </Wrapper>
}
        </>
    )
};

const Wrapper = styled.div`
height:100vh;
display:flex;
justify-content: center;
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
hr{
    width: 80%;
    color:black;
}
`
const Article = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow:5px 10px 9px 8px #888888;
border-radius: 10px;
height:85%;
width:80%;
background-color: white;
`
const ArticleImg = styled.img`
border-radius:10px;
width:450px;
height:350px;
margin:10px;
box-shadow:2px 15px 15px 2px #888888;
`
const ArticleTitle = styled.h1`
display: flex;
justify-content: center;
margin-top: 50px;
`
const Sum = styled.p`
display: flex;
justify-content: center;
`
const ArticleInfo = styled.div`
display:flex;
flex-direction: column;
`
const Content = styled.div`
margin:20px;
display:flex;
flex-direction: column;
margin-left:70px;
margin-right: 70px;
`
const Source = styled.a`
cursor:pointer;
color:blue;
text-decoration: underline;
margin-left: 40px;
margin-right: 40px;
display:flex;
align-items: center;
justify-content: center;
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

export default ArticleDetails;
