import React, { Component } from 'react';

import './App.css'

class App extends Component {
  state = {
    inputValue: "",
    message: null
  };

  // handling input changes and setting inputValue state
  changeHandler(e) {
    this.setState({
      inputValue: e.target.value,
      message: null
    });
  }
  // handling form submission and perform palindrome check
  submitHandler(e) {
    e.preventDefault();
    let string = this.state.inputValue;
    if (!string) {
      this.setState({
        message: false
      });
    } else {
      // regex is used to check string
      let regex = /[^a-zA-Z0-9]' '/g;
      let checkedString = string.replace(regex, " ");
      // checked string is splitted into array, reversed and joined back into a string
      let reversedString = checkedString.split("").reverse().join("").toLowerCase();
      // condition to compare strings
      if (checkedString.toLowerCase() === reversedString) {
        this.setState({
          message: true
        });
      } else {
        this.setState({
          message: false
        });
      }
    }
  }
  render() {
    //setting message value
    let messageState = this.state.message;
    let setMessage = "";
    if (messageState == null) {
      setMessage = "";
    } else {
       if (!messageState/*  && this.state.inputValue === ' ' */) {
        setMessage = "It's not a palindrome!";
      } else {
        setMessage = "Yeah! It's a palindrome";
      }
    }
    return (
      <div className='App'>
          <div className='content'>
            <h1>Palindrome Checker</h1>
            <form onSubmit={(e) => this.submitHandler(e)}>
              <input
                type="text"
                value={this.state.inputValue}
                placeholder="Enter word here"
                onChange={(e) => this.changeHandler(e)}
              />
              <button type="submit">Check</button>
            </form>
            <div className="message">{setMessage}
            </div>
          </div>
          <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
        </div>
      </div>
    );
  }
}

export default App;