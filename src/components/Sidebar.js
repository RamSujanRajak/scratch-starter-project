import React from "react";

import EventElement from "./EventElement";

import { motionElements } from './Motionelements';
import { looksElements } from './Lookselements';

import { MotionElement } from './MotionElement';
import { LooksElement } from './Lookselement';


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
