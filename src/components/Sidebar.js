import React from "react"; // Import the React library for building user interfaces

import EventElement from "./EventElement"; // Import the EventElement component for rendering event buttons

import { motionElements } from './Motionelements'; // Import an array of motion elements (likely data for rendering)
import { looksElements } from './Lookselements'; // Import an array of look elements (likely data for rendering)

import { MotionElement } from './MotionElement'; // Import the MotionElement component for rendering motion elements
import { LooksElement } from './Lookselement'; // Import the LooksElement component for rendering look elements

/**
 * Sidebar component that displays event buttons, motion elements, and look elements.
 *
 * Props:
 *  - onMotionElementClick: Function to be called when a motion element is clicked.
 *  - onLooksElementClick: Function to be called when a look element is clicked.
 */

export default function Sidebar({ onMotionElementClick, onLooksElementClick }) {
  
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200 bg-white">
      
      <div className="font-bold"> {"Events"}
        <EventElement text="When clicked" icon="flag" />
        <EventElement text="When this sprite clicked" />
      </div>
      
      <div className="font-bold text-xl mt-6 mb-4"> {"Motion"} </div>
        <div > {"Click the Motion elements"} </div>
        {motionElements.map((element, index) => (
          <div key={index} >
            <MotionElement element={element.text} index={index} styles={element.styles} onMotionElementClick={() => onMotionElementClick(index)} />
          </div>
        ))}

      <div className="font-bold text-xl mt-6 mb-4"> {"Looks"} </div>
        {looksElements.map((element, index) => (
          <div key={index} >
            <LooksElement key={index} element={element.text} index={index} styles={element.styles} onLooksElementClick={() => onLooksElementClick(index)} />
          </div>
        ))}
        
    </div>
  );
}
