import React from "react";
import Button from "../components/Button";
import ButtonClass from "../components/ButtonClass";
import ButtonFunction from "../components/ButtonFunction";
import MusicButton from "../components/MusicButton";



export const Home = () => {
    const playMusic = () => {
        alert('Nanananan');
    };

    const playOther = () => {
        alert('Other');
    };
    return (
        <div style={{ backgroundColor: 'blue' }}>
            <ButtonClass text="Props"></ButtonClass>
            <br></br>
            <ButtonFunction color="red" text="Props"></ButtonFunction>
            <br></br>
            <ButtonClass></ButtonClass>
            <br></br>
            <ButtonFunction></ButtonFunction>
            <hr />
            <Button></Button>
            {/* Konsep Reusable React */}
            <MusicButton text="Play Music" onClickProps={playMusic}></MusicButton>
            <MusicButton text="Play Other" onClickProps={playOther}></MusicButton>

        </div>

    );
};

export default Home;