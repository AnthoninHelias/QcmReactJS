import React, { ChangeEvent, useState } from 'react';
import './App.css';
import ButtonClick from "../components/ButtonClick";
import InputClick from "../components/InputClick";
import {Link} from "react-router-dom";


function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [displayedText, setDisplayedText] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setDisplayedText(inputValue);
  };


  return (
    <div className="App">
      <header className="App-header">

        <p>
        </p>
        <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
        >
        </a>

        <li>

        <Link to={{pathname: `/QuestionReponses/${inputValue}`}}>

          <ButtonClick className='button' onClick={handleButtonClick} disabled={false} submit={true}>
          OK
          </ButtonClick>
        </Link>
        </li>


        <InputClick
            type="text"
            title="name"
            className='input'
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Entrez un nom"
        />
        <p>{displayedText}</p>


      </header>

    </div>
  );
}


export default App;
