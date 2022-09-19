import React from "react";
import './info.css';

class Info extends React.Component
{
    render()
    {
        return(
        <div className="info--container">
            <img src="https://via.placeholder.com/317" alt="Person card image" />
            <div className="info--about">
                <h1 className="info--name">Jakub Kobiałka</h1>
                <h2 className="info--job">Frontend Developer</h2>
                <div className="info--buttons_container">
                    <div className="info--email_button">
                        <span>Email</span>
                    </div>
                    <div className="info--LinkedIn_button">
                        <span>LinkedIn</span>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Info;