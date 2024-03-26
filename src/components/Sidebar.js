import React from "react";
import Icon from "./Icon";

import { motionElements } from './Motionelements';
import { looksElements } from './Lookselements';

import { MotionElement } from './MotionElement';
import { LooksElement } from './Lookselement';


export default function Sidebar({onMotionElementClick, onLooksElementClick}) {
  
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200 bg-white">
      <div className="font-bold"> {"Events"} </div>
      <button className="flex flex-row flex-wrap bg-yellow-500 rounded min-w-max w-max text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When clicked"}
        <Icon name="flag" size={15} className="text-green-600 mr-2"/>
      </button>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded min-w-max w-max">
        {"When this sprite clicked"}
      </div>
      
      <div className="font-bold text-xl mt-6 mb-4"> {"Motion"} </div>
        {motionElements.map((element, index) => (
          <div key={index} >
          <MotionElement element={element.text} index={index} styles={element.styles} onMotionElementClick={() => onMotionElementClick(index)} />
        </div>
        ))}

      <div className="font-bold text-xl mt-6 mb-4"> {"Looks"} </div>
      {looksElements.map((element, index) => (
        <div key = {index} >
          <LooksElement key={index} element={element.text} index={index} styles={element.styles} onLooksElementClick ={()=> onLooksElementClick(index) }/>
        </div>
        ))}

  </div>
  );
}
