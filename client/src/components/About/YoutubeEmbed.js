import styled from "styled-components";

const YoutubeEmbed = ({embedId}) => { //embedId passed as props : Id given by youtube for specific video
    return(
        <Wrapper> 
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Mental Health"
            />
        </Wrapper>
    )

};

const Wrapper = styled.div`
display:flex;
justify-content: center;
margin:15px;
padding-bottom: 20px;;
`

export default YoutubeEmbed;