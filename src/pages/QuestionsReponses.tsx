import './App.css';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { questionAnswers } from "../data/questionsRéponses";
import ButtonClick from "../components/ButtonClick";

function QuestionReponses() {
    const { displayedText } = useParams<{ displayedText: string }>();
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

    const goToNextQuestion = () => {
        if (currentQuestionIndex < questionAnswers.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const currentQuestion = questionAnswers[currentQuestionIndex];


    return (
        <div className="App">
            <header className="App-header">
                <p>Bonjour: {displayedText}</p>
                <h2>{currentQuestion.question}</h2>
                    {currentQuestion.answer.map((answer) => (
                       <div className='container'>
                        <ButtonClick key={answer.id} className='button' onClick={goToNextQuestion} disabled={false} submit={true}>
                        {answer.title}
                        </ButtonClick>
                        </div>
                    ))}
            </header>
        </div>
    );
}

export default QuestionReponses;