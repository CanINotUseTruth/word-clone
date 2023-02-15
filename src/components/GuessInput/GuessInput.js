import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [currentGuess, setCurrentGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(currentGuess);
    setCurrentGuess('');
  }

  function handleInput(event) {
    event.preventDefault();
    setCurrentGuess(event.target.value.toUpperCase());
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={gameStatus !== 'running'}
        required
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        maxLength={5}
        value={currentGuess}
        onChange={handleInput}
      ></input>
    </form>
  );
}

export default GuessInput;
