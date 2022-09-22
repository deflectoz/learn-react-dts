import React from "react";

const Button = () => {
    const handleClick = (text) => {
        alert(text);
    };
    return <button onClick={() => handleClick("Sesuatu")}>Click Me !</button>;

};



export default Button;