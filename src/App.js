import React, { useState } from "react"; // Import React and useState hook for state management

import Sidebar from "./components/Sidebar"; // Import the Sidebar component
import MidArea from "./components/MidArea"; // Import the MidArea component
import PreviewArea from "./components/PreviewArea"; // Import the PreviewArea component
import { DndProvider } from 'react-dnd'; // Import DndProvider from react-dnd for drag and drop
import { HTML5Backend } from 'react-dnd-html5-backend'; // Import HTML5Backend for HTML5 drag and drop support

export default function App() {

  // State variables for application state
  const [elements, setElements] = useState([]); // Array to store dropped elements
  const [catPosition, setCatPosition] = useState(0); // Cat's position on the X-axis
  const [catRotationLeft, setCatRotationLeft] = useState(0); // Cat's rotation angle (left)
  const [catRotationRight, setCatRotationRight] = useState(0); // Cat's rotation angle (right)
  const [randomPosition, setRandomPosition] = useState({ x: 0, y: 0 }); // Position for random movement
  const [showHelloMessage, setShowHelloMessage] = useState(false); // Flag for showing "Hello" message
  const [showSayHelloMessage, setShowSayHelloMessage] = useState(false); // Flag for showing "Say Hello" message
  const [showThinkHmmFor2Sec, setShowThinkHmmFor2Sec] = useState(false); // Flag for showing "Hmm" 
  const [showThinkHmm, setShowThinkHmm] = useState(false); // Flag for showing "Hmm" 

  // Function to handle element drop in MidArea
  const handleDropElement = (element) => {
    setElements([...elements, element]); // Add dropped element to the state array
  };

  // Function to handle clicks on Motion Elements in Sidebar
  const handleMotionElement = (index, newPosition) => {
    // Update state based on the clicked Motion Element index
    if (index === 0) {
      setCatPosition((prevPosition) => prevPosition + 10);
    } 
    else if (index === 1) {
      setCatRotationLeft((prevRotation) => prevRotation - 15);
    }
    else if (index === 2) {
      setCatRotationRight((prevRotation) => prevRotation + 15);
    }
    else if (index === 3 && newPosition && newPosition.hasOwnProperty('x')) {
      setRandomPosition({ x: newPosition.x, y: newPosition.y });
    }
  };


// Function to handle clicks on Looks Elements in Sidebar
  const handleLooksElement = (index) => {
  // Update state to show temporary messages based on the clicked Looks Element index
    if (index === 0) {
      setShowHelloMessage(true);
      setTimeout(() => {
        setShowHelloMessage(false);
      }, 2000);
    }
    else if (index === 1) {
      setShowSayHelloMessage(true);
      setTimeout(() => {
        setShowSayHelloMessage(false);
      }, 5000);
    }
    else if (index === 2) {
      setShowThinkHmmFor2Sec(true);
      setTimeout(() => {
        setShowThinkHmmFor2Sec(false);
      }, 2000);
    }
    else if (index === 3) {
      setShowThinkHmm(true);
      setTimeout(() => {
        setShowThinkHmm(false);
      }, 10000);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-blue-100 pt-6 font-sans h-screen">
        <div className="h-screen overflow-hidden flex flex-row ">
          <div className="flex-1 h-full flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar onMotionElementClick={handleMotionElement} onLooksElementClick={handleLooksElement} /> 
            <MidArea onDropElement={handleDropElement}/>
          </div>
          <div className="w-1/3 h-full flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
            <PreviewArea catPosition={catPosition} 
                         setCatPosition={setCatPosition}  
                         catRotationLeft={catRotationLeft} 
                         setCatRotationLeft={setCatRotationLeft}  
                         catRotationRight={catRotationRight} 
                         setCatRotationRight={setCatRotationRight}  
                         randomPosition={randomPosition} 
                         setRandomPosition={setRandomPosition}
                         showHelloMessage={showHelloMessage}
                         showSayHelloMessage={showSayHelloMessage}
                         ThinkHmmFor2Sec={showThinkHmmFor2Sec}
                         ThinkHmm={showThinkHmm}
                         handleFourthElementClick={() => {
                           const newPositionX = Math.floor(Math.random() * 400); 
                           const newPositionY = Math.floor(Math.random() * 400); 
                           setRandomPosition({ x: newPositionX, y: newPositionY });
                         }}/>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
