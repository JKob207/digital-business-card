import React from "react";
import "./about.css";

class About extends React.Component
{
    render()
    {
        return(
            <div className="about--container">
                <h3 className="about--title">About</h3>
                <p className="about--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum erat eu dui sagittis, vel tempor turpis cursus. Sed molestie mattis rutrum. Curabitur feugiat varius odio at fringilla. Aliquam commodo eu risus non aliquet. Morbi ac tincidunt libero.</p>
            </div>
        )
    }
}

export default About;