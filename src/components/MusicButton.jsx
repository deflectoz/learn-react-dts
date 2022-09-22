import React from "react";

const MusicButton = ({ text, onClickProps }) => {
    return <button onClick={onClickProps}>{text}</button>
};

export default MusicButton;