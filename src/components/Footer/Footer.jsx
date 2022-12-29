import React from "react";
import "../../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faFacebook,
    
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
              

                <div className="item1">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} Fayda
                    </span>
                </div>
              <div className="item2"></div>
                <a
                    href=""
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faPhone} />
                </a>
                <a
                    href=""
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>

            </div>
        </footer>
    );
};

export default Footer;