import React from "react";
import "./about.css";

class About extends React.Component
{
    render()
    {
        return(
        <div className="about--container">
            <img src="https://via.placeholder.com/317" alt="Person card image" />
            <div className="about--info">
                <h1 className="about--name">Jakub Kobiałka</h1>
                <h2 className="about--job">Frontend Developer</h2>
                <div className="about--buttons_container">
                    <div className="about--email_button">
                        <span>Email</span>
                    </div>
                    <div className="about--LinkedIn_button">
                        <span>LinkedIn</span>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default About;