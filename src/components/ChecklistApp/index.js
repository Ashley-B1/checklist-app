import React from 'react';
import './ChecklistApp.css';

const Checklist = () => {
  return (
    <div className='chl-section'>
      <div id='val-sel'>
        <h1>
          Selected Value:
        </h1>
      </div>
      <ul id='chk-list'>
        <li className='chk-items'>
          <input type='checkbox' className='option' name='select-all' />
          <label for='select-all'>Select All</label>
        </li>
        <li className='chk-items'>
          <input type='checkbox' className='option' name='kosher' />
          <label for='Kosher'>Kosher</label>
        </li>
        <li className='chk-items'>
          <input type='checkbox' className='option' name='no-cel' />
          <label for='no-cel'>No Celery</label>
        </li>
        <li className='chk-items'>
          <input type='checkbox' className='option' name='no-egg' />
          <label for='no-egg'>No Egg</label>
        </li>
      </ul>

      <div className='btn-sec'>
        <button id='clear'>
          Clear All
        </button>
      </div>
    </div>
  )
}

export default Checklist
