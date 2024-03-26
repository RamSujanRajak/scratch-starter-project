  import React from "react";
  import { useDrag } from "react-dnd";
  import { ItemTypes } from "./ItemTypes";
  import Icon from "./Icon";


  export const MotionElement = ({ element, styles, index, onDropElement, onMotionElementClick }) => {
    const [{ isDragging }, drag] = useDrag({
      type: ItemTypes.MOTION_ELEMENT,
      item: { type: ItemTypes.MOTION_ELEMENT, element, styles},
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const handleElementClick = () => {
      if (index === 0 || index === 1 || index === 2) {
        onMotionElementClick(index);
      } 

      else if (index === 3) {
        handleFourthElementClick();
      }
    };

    const handleFourthElementClick = () => {
      console.log("Clicked fourth element");
      const newPositionX = Math.floor(Math.random() * 400); 
      const newPositionY = Math.floor(Math.random() * 400); 
      onMotionElementClick(index, { x: newPositionX, y: newPositionY });
    };


    const handleDrop = () => {
      onDropElement(element, styles);
    };
  

    return (
      <div
        ref={drag}
        className={`flex flex-row flex-wrap ${styles?.backgroundColor} ${styles?.textColor} ${styles?.padding} ${styles?.margin} ${styles?.fontSize} ${styles?.cursor} ${styles?.rounded}`}
        style={{ opacity: isDragging ? 0.5 : 1 }}
        onClick={handleElementClick}
        onDrop={handleDrop}
      >
        {element}
        {index === 1 ?  <Icon name="undo" size={15} className="text-white mx-2" /> : null}
        {index === 2 ?  <Icon name="redo" size={15} className="text-white mx-2" /> : null}
      </div>
    );
  };
