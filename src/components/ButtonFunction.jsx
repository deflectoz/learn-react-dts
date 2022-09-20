import React from "react";

const ButtonFunction = (props) => {
    //Props akan jadi object
    // {text : 'Isi'}
    const { color } = props;
    const { text } = props;//Destruction
    return <button style={{ backgroundColor: color }}>{text}</button>
}

export default ButtonFunction;

ButtonFunction.defaultProps = {
    text: 'Default Value',
};
