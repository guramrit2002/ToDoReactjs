// ButtonArea.js
import React from 'react';

function ButtonArea({ activeButton, handletabbutton }) {
  return (
    <div className='btn-area'>
      <button onClick={() => handletabbutton('todo')} className={`primary-button ${activeButton === 'todo' ? 'active' : ''}`}>Todo</button>
      <button onClick={() => handletabbutton('done')} className={`primary-button ${activeButton === 'done' ? 'active' : ''}`}>Completed</button>
    </div>
  );
}

export default ButtonArea;
