import React from "react";
import { Link } from "react-router-dom";

import "./../../../styles/index.scss";
import "./base.scss";

const Base = () => {
    return(
        <div className="wrapper">
            <div className="option">
                <h1 className="option__title">Who you are?</h1>
                <div className="option__links">
                    <div className="option__link option__link_patient">
                        <Link to="/sign_up">Patient</Link>
                    </div>
                    <div className="option__link option__link_doctor">
                        <Link to="/sign_up">Doctor</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Base;