import React from "react";
import ReactDOM from "react-dom/client";
import Info from "./components/Info/info";
import About from "./components/About/about";
import Interests from "./components/Interests/interests";
import Footer from "./components/Footer/footer";
import './style.css';

class App extends React.Component
{
    render()
    {
        return(
        <div className="app--container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);