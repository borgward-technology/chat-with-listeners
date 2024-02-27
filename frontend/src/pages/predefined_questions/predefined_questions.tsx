import {  useState } from "react";
import "./predefined_questions.css";
import { useNavigate } from "react-router-dom";


interface QuestionModel {
    id: number;
    question : string;
}

const questionsList : QuestionModel[] = [
    {id: 1, question : "Question 1"},
    {id: 2, question : "Question 2"},
    {id: 3, question : "Question 3"},
    {id: 4, question : "Question 4"},
    {id: 5, question : "Question 5"},
];


const PredefinedQuestions = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");

    const handleOnChangeEvent = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }


    return (

     
        <div style={({ justifyContent:"center", display:"flex", alignItems:"center", height:"80vh", flexDirection:"column" })}> 
            
            <h1>
               Predefined Questions 
            </h1>

        
            <div className="main-container">
          
            
            <h1>{questionsList[currentIndex].question}</h1>

                <div className="outer_container">
                        <input type="text" placeholder="Enter your answer" value={inputValue} onChange={handleOnChangeEvent} className="custom_input"></input>
                </div>

                <div className="next_button" onClick={() => {
                    if(inputValue.trim() !== ''){
                        if(currentIndex !== 4){
                            setCurrentIndex(currentIndex + 1 );
                            setInputValue("");
                        } else {
                            navigate("/chatbox"); 
                        }
                    } else {
                        alert("Enter your answer please to proceed.");
                    }
                }
                     } > { currentIndex === 4 ? "Submit" : "Next"}</div>

                </div>

            </div>
    );
}

export default PredefinedQuestions;