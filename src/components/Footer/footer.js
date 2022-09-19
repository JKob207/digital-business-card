import React from "react";
import "./footer.css";
import twitter from "../../images/twitter.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import github from "../../images/github.png";

class Footer extends React.Component
{
    render()
    {
        return(
            <footer className="footer">
                <a href="#">
                    <img src={twitter} alt="Twitter" />
                </a>
                <a href="#">
                    <img src={facebook} alt="Facebook" />
                </a>
                <a href="#">
                    <img src={instagram} alt="Instagram" />
                </a>
                <a href="#">
                    <img src={github} alt="GitHub" />
                </a>
            </footer>
        );
    }
}

export default Footer;