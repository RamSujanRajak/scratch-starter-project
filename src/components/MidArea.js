import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";// Import ItemTypes for drag and drop type definitions

export default function MidArea({ onDropElement }) {
  // State to store dropped elements
  const [droppedElements, setDroppedElements] = useState([]);

  // Use the useDrop hook to handle drag and drop events on the MidArea
  const [{ isOver }, drop] = useDrop({
    // Accept elements of types MOTION_ELEMENT and LOOKS_ELEMENT
    accept: [ItemTypes.MOTION_ELEMENT, ItemTypes.LOOKS_ELEMENT],
    // Triggered when an element is dropped
    drop: (item) => {
      console.log("Dropped item:", item.element); // Log the dropped element's text
      // Update state with the dropped element's text and styles
      setDroppedElements((prevElements) => [...prevElements, { text: item.element, styles: item.styles }]);
      // Call the provided onDropElement function with the dropped element data (text and styles)
      onDropElement({ text: item.element, styles: item.styles });
    },
    // Collect information about the drop target (MidArea)
    collect: (monitor) => ({
      isOver: !!monitor.isOver(), // Set isOver based on whether an element is hovering over the MidArea
    }),
  });
  
  // Function to remove a dropped element by index
  const RemoveElementHandler = (indexToRemove) => {
    console.log("Removed element at index:", indexToRemove); // Log the removed element's index
    // Filter out the element at the given index from the droppedElements state
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
      <h1>clcik element to remove </h1>
      
      {droppedElements.map((element, index) => (
        <div
          key={index}
          className={`flex flex-row flex-wrap ${element.styles.backgroundColor} ${element.styles.textColor} ${element.styles.padding} ${element.styles.margin} ${element.styles.fontSize} ${element.styles.cursor} ${element.styles.rounded}`}
          onClick={() => RemoveElementHandler(index)}>
          {element.text}</div>
      ))}
    </div>
  );
}
