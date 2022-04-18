import React from "react";
import { Routes, Route } from "react-router-dom";

import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

const App = () => {
    return(
        <div className="wrapper">
            <Routes>
                <Route path="/sign_up" element={<SignUpForm />} />
                <Route path="/sign_in" element={<SignInForm />} />
            </Routes>
        </div>
    )
}

export default App;