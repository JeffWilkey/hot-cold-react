import React from 'react';
import Guess from './Guess';

import './game.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      temperature: "Make your Guess!",
      answer: null,
      tempColor: '#CA354D',
      numOfguesses: 0,
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

  onGuessSubmit = (e) => {
    e.preventDefault();
    this.handleCurrentGuess();
    this.handlePreviousGuesses();
    this.textInput.current.value = ""; // reset form field
  }

  componentWillMount() {
    this.setState({ answer: Math.floor((Math.random() * 100) + 1) })
  }

  render () {
    const previousGuesses = this.state.prevGuesses.map((guess, index) => (
      <li key={index} className="previous-guess">{guess} </li>
    ))
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
      </div>
    )
  }
}
