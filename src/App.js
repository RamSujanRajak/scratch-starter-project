import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function App() {

  const [elements, setElements] = useState([]);
  const [catPosition, setCatPosition] = useState(0);
  const [catRotationLeft, setCatRotationLeft] = useState(0);
  const [catRotationRight, setCatRotationRight] = useState(0);
  const [randomPosition, setRandomPosition] = useState({ x: 0, y: 0 });
  const [showHelloMessage, setShowHelloMessage] = useState(false);
  const [showSayHelloMessage, setShowSayHelloMessage] = useState(false);
  const [showThinkHmmFor2Sec, setShowThinkHmmFor2Sec] = useState(false);
  const [showThinkHmm, setShowThinkHmm] = useState(false);

  const handleDropElement = (element) => {
    setElements([...elements, element]);
  };

  const handleMotionElement = (index, newPosition) => {
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

  const handleLooksElement = (index) => {
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
