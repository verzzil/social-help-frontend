import React from "react";
import { Link } from "react-router-dom";

import "./../../../styles/index.scss";
import "./base.scss";

const Base = () => {
    return(
        <div className="wrapper">
            <div className="option">
                <h1 className="option__title">Кто вы?</h1>
                <div className="option__links">
                    <div className="option__link option__link_patient">
                        <Link to="/sign_up">Пациент</Link>
                    </div>
                    <div className="option__link option__link_doctor">
                        <Link to="/sign_up">Врач</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Base;