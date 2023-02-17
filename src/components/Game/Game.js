import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
import RestartButton from '../RestartButton/RestartButton';
import Keyboard from '../Keyboard/Keyboard';
import { checkGuess } from '../../game-helpers';

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  function handleSubmitGuess(currentGuess) {
    const nextGuessList = [...guessList, currentGuess];
    setGuessList(nextGuessList);

    if (currentGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  function handleRestart() {
    console.log('Restart');
    setAnswer(() => sample(WORDS));
    setGuessList([]);
    setGameStatus('running');
  }

  const validatedGuesses = guessList.map((guess) =>
    checkGuess(guess, answer)
  );

  return (
    <>
      <GuessList validatedGuesses={validatedGuesses} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      <Keyboard validatedGuesses={validatedGuesses} />
      {gameStatus === 'won' && (
        <WonBanner
          numOfGuesses={guessList.length}
          handleRestart={handleRestart}
        />
      )}
      {gameStatus === 'lost' && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
      {gameStatus !== 'running' && (
        <RestartButton handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
