import { useState } from 'react';
import '../css/AeroThemes.css';
import Draggable from 'react-draggable';

function Window({ id, title, children }) {
  const [isWindowOpen, setIsWindowOpen] = useState(true); // Track open/close state
  const [isWindowMinimized, setIsWindowMinimized] = useState(false); // Track minimized state

  const toggleWindow = () => setIsWindowOpen(false); // Close window
  const toggleMinimize = () => setIsWindowMinimized(!isWindowMinimized); // Minimize/restore window

  if (!isWindowOpen) return null; // Don't render if the window is closed

  return (
    <Draggable
    handle=".window-title-bar">
      <div id={id} className={`aero-window ${isWindowMinimized ? 'window-minimized' : ''}`}>
        {/* Title bar with buttons */}
        <div className="window-title-bar">
            <span style={{color: '#000000'}}>{title}</span>
            <button className="aero-minimize-button" onClick={toggleMinimize}>_</button>
            <button className="aero-close-button" onClick={toggleWindow}>X</button>
        </div>
        <div className="window-content">
          {children || <p>[!] Content missing</p>}
        </div>
      </div>
    </Draggable>
  );
}

export default Window;
