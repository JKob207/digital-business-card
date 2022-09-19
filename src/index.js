import React from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About/about";
import './style.css';

class App extends React.Component
{
    render()
    {
        return(
        <div>
            <About />
        </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);