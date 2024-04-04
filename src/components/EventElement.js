import React from 'react';
import Icon from './Icon';

const EventElement = ({ text, icon }) => {
    // This component will be used to render a single event element
  return (
    <div className="flex flex-row flex-wrap bg-yellow-500 rounded min-w-max w-max text-white px-2 py-1 my-2 text-sm cursor-pointer">
      {text}
      <Icon name={icon} size={15} className="text-green-600 mr-2" />
    </div>
  );
}

export default EventElement;


/* 
"The below code is for performing dragging in the app, but it's not working due to some error. 
However,I've used the same code in MotionElement and LooksElement to make them draggable."
*/

// const EventElement = ({ text, icon }) => {
//   const [{ isDragging }, drag] = useDrag({
//     item: { type: 'EVENT_ELEMENT' }, 
//     collect: monitor => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   });

//   return (
//     <div
//       ref={drag}
//       className={`flex flex-row flex-wrap bg-yellow-500 rounded min-w-max w-max text-white px-2 py-1 my-2 text-sm cursor-pointer ${isDragging ? 'opacity-50' : ''}`}
//     >
//       {text}
//       <Icon name={icon} size={15} className="text-green-600 mr-2" />
//     </div>
//   );
// }

