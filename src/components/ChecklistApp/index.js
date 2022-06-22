import React from 'react';
import './ChecklistApp.css';

const Checklist = () => {
  const options = [
    {
      idx: 0,
      name: 'Kosher',
      checked: false
    },
    {
      idx: 1,
      name: 'No Celery (inc celeriac)',
      checked: false
    },
    {
      idx: 2,
      name: 'No Egg',
      checked: false
    },
  ]

  return (
    <div className='chl-section'>
      <div id='val-sel'>
        <h1>
          Selected Value:
        </h1>
      </div>
      <ul id='chk-list'>
        <li>
          <label className='options'>
            <input type='checkbox' />
            <span className='chckd'></span>
            <p>Select All</p>
          </label>
        </li>
        {options.map(option => (
          <li key={option.idx}>
            <label className='options'>
              <input
                type='checkbox'
                name={option.idx}
                value={option.name}
              />
              <span className='chckd'></span>
              <p>{option.name}</p>
            </label>
          </li>
        ))}
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
