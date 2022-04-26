import React from "react";
import { Routes, Route } from "react-router-dom";

import SignUpForm from "./components/forms/SignUpForm";
import SignInForm from "./components/forms/SignInForm";
import MainPage from "./components/pages/Main/MainPage";
import Base from "./components/options/Base/Base";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/sign_up" element={<SignUpForm />} />
        <Route path="/sign_in" element={<SignInForm />} />
        <Route path="/main_page" element={<MainPage />} />
        <Route path="/base" element={<Base />} />
      </Routes>
    </div>
  );
};

export default App;
