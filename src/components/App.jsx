import React  from "react";
import { useState } from "react";

function App() {
    
    const [headingText, setHeadingText] = useState("Hello");
    const [isMouseOver, setMouseOver] = useState(false)

    function handleClick() {
        console.log("Hello");
        setHeadingText("Submited");
    }

    function mouseOver() {
        setMouseOver(true);
    }

    function mouseOut() {
        setMouseOver(false);
    }
    return (
        <div className="container">
        <h1> {headingText} </h1>
        <input type="text" placeholder="What's your name?" />
        <button 
        style={{backgroundColor : isMouseOver ? "teal" : "white"}}
        onClick={handleClick}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}>Submit</button>
        
      </div>
    
    );
}

export default App;