import React from 'react';
import ReactDOM from 'react-dom/client';

//Episode 3.1
/*
//React.createElement => object => HTML Element
//const heading=React.createElement("h1",{},"Hello World");

//JSX - HTML like syntax/ XML like syntax
//JSX =>(Transpiled before it reaches the JS engine) - Parcel =>Babel
//JSX=> React.createElement => object(JS object) => HTML Element(render)
const jsxHeading=<h1>NAmate REact from JSX</h1>

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
*/

//Episode3.2

const title=(
    <div>
        Namaste React using JSX
    </div>
)

const HeadingComponent=()=>(
    <div id="container">
        <h1>Namaste React</h1>
        {title}
        <h2>{console.log("Hello")}</h2>
      
    </div>
)
     
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);n a m a s t e - r e a c t  
 