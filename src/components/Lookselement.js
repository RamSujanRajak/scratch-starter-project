import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

export const LooksElement = ({ element, styles, onLooksElementClick }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.LOOKS_ELEMENT,
    item: { type: ItemTypes.LOOKS_ELEMENT, element, styles },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });


  const ClickHandler = () => {
    console.log(`Looks "${element}"  Element is clicked`);
    onLooksElementClick(); 
  };


  return (
    <div
      ref={drag}
      className={`flex flex-row flex-wrap ${styles?.backgroundColor} ${styles?.textColor} ${styles?.padding} ${styles?.margin} ${styles?.fontSize} ${styles?.cursor} ${styles?.rounded}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onClick={ClickHandler} 
    >
      {element}
    </div>
  );
};
