import React from "react";
import { Routes, Route } from "react-router-dom";

import SignUpForm from "./components/forms/SignUpForm";
import SignInForm from "./components/forms/SignInForm";
import MainPage from "./components/pages/Main/MainPage";
import Base from "./components/options/Base/Base";
import Layout from "./components/layout/Layout";
import Profile from "./components/pages/Profile/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/sign_up" element={<SignUpForm />} />
      <Route path="/sign_in" element={<SignInForm />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/base" element={<Base />} />
    </Routes>
  );
};

export default App;
