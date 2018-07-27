import React from 'react';

import './guess.css'

export default class Guess extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input ref={this.props.textInput} type="number" className="guess" placeholder="Enter your Guess"/><br/>
        <input type="submit" className="guess-submit" value="Guess"/>
      </form>
    )
  }
}
