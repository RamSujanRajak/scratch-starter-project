import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

export default function MidArea({ onDropElement }) {
  const [droppedElements, setDroppedElements] = useState([]);

  const [{ isOver }, drop] = useDrop({
    accept: [ItemTypes.MOTION_ELEMENT, ItemTypes.LOOKS_ELEMENT],
    drop: (item) => {
      console.log("Dropped:", item.element);
      setDroppedElements((prevElements) => [...prevElements, { text: item.element, styles: item.styles }]);
      
      onDropElement({ text: item.element, styles: item.styles });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  
  const handleRemoveElement = (indexToRemove) => {
    console.log("Removed", indexToRemove)
    setDroppedElements((prevElements) => prevElements.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div 
      ref={drop} 
      className={`flex-1 h-full overflow-auto ${isOver ? 'bg-gray-200' : ''}` }
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column' 
        }}>
      <h1>Drop elements here</h1>
      
      {droppedElements.map((element, index) => (
        <div
          key={index}
          className={`flex flex-row flex-wrap ${element.styles.backgroundColor} ${element.styles.textColor} ${element.styles.padding} ${element.styles.margin} ${element.styles.fontSize} ${element.styles.cursor} ${element.styles.rounded}`}
          onMouseEnter={() => handleRemoveElement(index)}>
          {element.text}</div>
      ))}
    </div>
  );
}
