import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   
    faFacebook,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer >
            <div className="footer-container">
                <div className="item1">
                   National ID
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} Fayda
                    </span>
                </div>
                <a
                    href="id.gov.et"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a
                    href="https://www.facebook.com/IDethiopia/?ref=pages_you_manage"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                    href="https://twitter.com/IDethiopia"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faTwitter} />
                </a>

              
            </div>
        </footer>
    );
};

export default Footer;