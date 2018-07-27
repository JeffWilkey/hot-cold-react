import React from 'react';
import Guess from './Guess';
import Button from './Button';

import './game.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      temperature: "Make your Guess!",
      answer: Math.floor((Math.random() * 100) + 1),
      tempColor: '#CA354D',
      prevGuesses: []
    }
  }

  handlePreviousGuesses() {
    let prevGuesses = this.state.prevGuesses
    prevGuesses.push(this.textInput.current.value.trim());
    this.setState({ prevGuesses });
  }

  handleCurrentGuess() {
    let { answer } = this.state;
    let currentGuess = this.textInput.current.value.trim();
    if (currentGuess < answer) {
      if ((answer - currentGuess) < 15) {
        this.setState({ temperature: 'Oh you are Hot!' })
      } else {
        this.setState({ temperature: 'Damn, you are cold!' })
      }
    } else if (currentGuess > answer){
      if ((currentGuess - answer) < 15) {
        this.setState({ temperature: 'Oh your Hot!'})
      } else {
        this.setState({ temperature: 'Damn, you are cold!' })
      }
    } else if (currentGuess == answer) {
      this.setState({ temperature: "You got it!" })
    }
  }

  onClickNewGame = (e) => {
    e.preventDefault();
    this.setState({
      answer: Math.floor((Math.random() * 100) + 1),
      prevGuesses: [],
      temperature: "Make your Guess!"
    })
    this.textInput.current.value = "";
  }

  onGuessSubmit = (e) => {
    e.preventDefault();
    this.handleCurrentGuess();
    this.handlePreviousGuesses();
    this.textInput.current.value = ""; // reset form field
  }

  render () {
    const previousGuesses = this.state.prevGuesses.map((guess, index) => (
      <li key={index} className="previous-guess">{guess} </li>
    ));

    const newGameButton = {
      position: 'fixed',
      top: '15px',
      right: '15px'
    }
    if (!this.state.answer) {
      return null
    }

    return (
      <div className="container">
        <h1 className="header">Hot or Cold</h1>
        <div className="guess-box">
          <h3 className="guess-temperature" style={{ backgroundColor: this.state.tempColor }}>{this.state.temperature}</h3>
          <Guess onSubmit={e => this.onGuessSubmit(e)} textInput={this.textInput}/>
          <ul className="previous-guesses">
            {previousGuesses}
          </ul>
        </div>
        <Button text="New Game" customStyle={newGameButton} onClick={(e) => this.onClickNewGame(e)}/>
      </div>
    )
  }
}
