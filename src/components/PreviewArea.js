import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({
  catPosition,
  catRotationLeft,
  catRotationRight,
  randomPosition,
  showHelloMessage,
  showSayHelloMessage,
  ThinkHmmFor2Sec,
  ThinkHmm,
  handleFourthElementClick,
}) {
  

return (
    <div
      style={{
        marginTop: "20px",
        position: "relative",
        width: "100%",
        height: "100%",
      }}>

      <div
        style={{
          left: catPosition,
          top: randomPosition.y,
          transform: `rotate(${catRotationLeft}deg) rotate(${catRotationRight}deg)`,
          transition: "transform 0.3s ease-in-out",
          position: "absolute",
          cursor: "grab",
        }}>

        <CatSprite />

        {showHelloMessage && (
          <h1 style={{ position: "absolute", top: "20%", left: "180%",  zIndex: 10,}} className="absolute top-1/5 left-1/10 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded min-w-max w-max">
            Hello buddy
          </h1>
        )}

        {showSayHelloMessage && (
          <h1 style={{ position: "absolute", top: "20%", left: "180%" }} className="absolute top-1/5 left-1/10 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded min-w-max w-max">
            Say hello
          </h1>
        )}

        {ThinkHmmFor2Sec && (
          <h1 style={{ position: "absolute", top: "20%", left: "180%" }} className="absolute top-1/5 left-1/10 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded min-w-max w-max">
            Think Hmm....
          </h1>
        )}

        {ThinkHmm && (
          <h1 style={{ position: "absolute", top: "20%", left: "180%" }} className="absolute top-1/5 left-1/10 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded min-w-max w-max">
            Think Hmm....
          </h1>
        )}

      </div>


      <button 
        onClick={handleFourthElementClick}
        style={{ position: "absolute", top: "10px", right: "10px" }}
        className="flex flex-row flex-wrap bg-red-800 rounded min-w-max w-max text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        go to rendom position
      </button>

      
    </div>
  );
}
