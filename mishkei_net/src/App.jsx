import { useState } from 'react';
import Taskbar from '../src/components/Taskbar';
import Window from '../src/components/Window';
import GitWindow from '../src/components/GitWindow';
import AboutMeWindow from '../src/components/AboutMeWindow';
import './App.css';

function App() {
  // Manage individual window states
  const [windowStates, setWindowStates] = useState({
    window1: 'minimized',
    window2: 'minimized',
  });

  // Handle icon click by passing the window ID
  const handleIconClick = (windowId) => {
    console.log(`Icon for ${windowId} clicked`);

    setWindowStates((prevStates) => {
      const newState =
        prevStates[windowId] === 'maximized' ? 'minimized' : 'maximized';
      console.log(`Changing ${windowId} state to: ${newState}`);

      // Find the window element by ID
      const windowElement = document.getElementById(windowId);

      if (windowElement) {
        console.log(`Window element for ${windowId} found`);
        // Update the class based on the new state
        if (newState === 'maximized') {
          windowElement.classList.remove('window-minimized');
          windowElement.classList.add('window-maximized');
        } else {
          windowElement.classList.remove('window-maximized');
          windowElement.classList.add('window-minimized');
        }
      }

      return {
        ...prevStates,
        [windowId]: newState,
      };
    });
  };

  return (
    <>
      <div style={{ position: 'absolute', overflow: 'visible' }}>
        <img
          src="../src/assets/bg.jpg"
          alt=""
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            objectFit: 'fill',
          }}
        />

        {/* Render the windows */}
        <Window
          title="About Me"
          id="window1"
          className={`window-${windowStates.window2}`}
        >
          <AboutMeWindow />
        </Window>
        <Window
          title="GitHub"
          id="window2"
          className={`window-${windowStates.window1}`}
        >
          <GitWindow />
        </Window>
        

        {/* Pass handlers for each icon */}
        <Taskbar
          onIcon1Click={() => handleIconClick('window1')}
          onIcon2Click={() => handleIconClick('window2')}
        />
      </div>
    </>
  );
}

export default App;
