import { useState } from 'react';
import '../css/AeroThemes.css';
import GitIcon from '../assets/git.svg';
import QuestionIcon from '../assets/question.svg';

function Taskbar({ onIcon1Click, onIcon2Click }) {
  return (
    <div
      className='Aero1'
      style={{
        width: '100%',
        height: '48px',
        position: 'fixed',
        bottom: 0,
        left: 0,
        display: 'flex',
        zIndex: 0
      }}
    >
      <div
        className='AeroIcon'
        style={{ zIndex: 21 }}
        onClick={onIcon1Click} // Trigger the click handler when clicked
      >
        <img src={QuestionIcon} alt="Info Icon" />
      </div>
      <div
        className='AeroIcon'
        style={{ zIndex: 20 }}
        onClick={onIcon2Click} // Trigger the click handler when clicked
      >
        <img src={GitIcon} alt="Git Icon" />
      </div>
      
    </div>
  );
}

export default Taskbar;
