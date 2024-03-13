
import "../how_it_works/how_it_works.css";
import CongratCard from "./components/card_component";
import overlayImage from "../../assets/cwl_7.jpeg";
import ContentWithImage from "../../components/card_with_text_component";




interface BulletPointProps {
    text: string;
}
interface CardInterface {
    title : string,
    content : string,
}


const BulletPoint : React.FC<BulletPointProps>  = ( {text} )  => <li style={({marginTop:"30px"})}>{text}</li>;


const HowItWorks = () => {


    const listOfCards : CardInterface[]  = [
        {title:"Time", content:"For an hour of Listening time, you will be able to speak about anything on your mind. This is a no-holds barred session, and no subject is off limits. Expect complete confidentiality, and the session will not be recorded in any form"},
        {title:"No Judgement", content:"A \"No Judgement\" listener is someone who actively practices and promotes a non-judgmental approach in their interactions with others. This means they refrain from forming negative opinions or criticisms based on the information shared by the speaker. "},
        {title:"Time limit", content:"All Listening sessions are no limited. You will book multiple hours on the same day 365 days 24X7"},
        {title:"Online AUDIO Call & Chatting Only", content:"All sessions are conducted online using audio only. There will be no video to respect your ultimate privacy of space and non-judgment about your appearance."},
        {title:"Payment", content:"Payment will be made in advance through the online booking system"},
    ];

    const bulletPoints = [
        'The session begins with introductions and setting a tone of confidentiality and trust.',
        'One individual, known as the speaker, takes the floor to share their thoughts, feelings, or experiences. This could involve discussing challenges, successes, or any topic they choose.',
        'After the speaker has shared, listeners may offer reflective responses. This involves paraphrasing or summarizing what the speaker said to confirm understanding and demonstrate empathy.',
        'Listeners may ask open-ended and clarifying questions to encourage the speaker to explore their feelings or thoughts further. This helps deepen the conversation.',
        'Throughout the session, listeners provide empathetic responses, expressing understanding and support for the speaker\'s experiences without judgment.',
      ];
      
    return (
        <div className="how_it_works_main">

            <h2 style={({marginTop:"150px"})}>How It Works</h2>

     
            <div className="how_it_works_bullet">
                <h2 style={({textAlign:"center"})}>Introduction and Establishing Trust:</h2>
                <ul >
                    {bulletPoints.map((point, index) => (
                        <BulletPoint text={point}></BulletPoint>  
                    ))}
                </ul>
            </div>

            <div style={({height:"100px"})}></div>
            <ContentWithImage 
                heading={ 'Why Not Friends Or Family'} 
                subheading={'There are some things you just can’t tell your friends and family right now. In fact, the closer your friends and family are, the more they tend to feel entitled about letting you know what’s in your best interest. And with that, the more they end up judging you even without intending to. Yes your family and friends do love you. But sometimes you just do not want them to know right now, and do not want their predictable advice at this time.'} 
                imgUrl={overlayImage} 
                shouldVertical = {true}
            /> 
            <div style={({height:"100px"})}></div>
            

            <h2>What we offer</h2>

            <div className="how_to_works_cards">

            {listOfCards.map((card, index) => (
                <CongratCard title={card.title}  content={card.content}></CongratCard>
            ))}
            </div>
        </div>
    );
}

export default HowItWorks;