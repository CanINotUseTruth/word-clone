import React from 'react';

function RestartButton({ handleRestart }) {
  return (
    <button className="restart-button" onClick={handleRestart}>
      Click to Restart!
    </button>
  );
}

export default RestartButton;
