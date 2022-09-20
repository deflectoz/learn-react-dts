import * as React from 'react';
import ButtonClass from './components/ButtonClass';
import ButtonFunction from './components/ButtonFunction';
// import './style.css';

export default function App() {
  //const langs = ['JSX', 'React', 'Next'];

  return (
    <div style={{backgroundColor: 'blue'}}>
     <ButtonClass text="Props"></ButtonClass>
     <br></br>
     <ButtonFunction color="red" text="Props"></ButtonFunction>
     <br></br>
     <ButtonClass></ButtonClass>
     <br></br>
     <ButtonFunction></ButtonFunction>
    </div>

  )
}