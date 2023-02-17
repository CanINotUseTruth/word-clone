import React from 'react';

const ALPHA_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      if (statusObj[letter] === 'correct') return;
      statusObj[letter] = status;
    });
  });

  return statusObj;
}

function Keyboard({ validatedGuesses }) {
  let statusByLetter = getStatusByLetter(validatedGuesses);

  return (
    <div className="keyboard">
      {ALPHA_ROWS.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((letter) => (
            <div
              key={letter}
              className={`key ${statusByLetter[letter]}`}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
