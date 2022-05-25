import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SignUpForm from "./components/forms/SignUpForm";
import SignInForm from "./components/forms/SignInForm";
import MainPage from "./components/pages/Main/MainPage";
import Base from "./components/options/Base/Base";
import Layout from "./components/layout/Layout";
import Profile from "./components/pages/Profile/Profile";
import Timetable from "./components/pages/Chats/Chats";
import Chats from "./components/pages/Chats/Chats";
import Favorites from "./components/pages/Favorites/Favorites";
import DoctorsPage from "./components/pages/Doctors/DoctorsPage";
import AssignPage from "./components/structures/assign/AssignPage";

const App = () => {
  const [validate, setValidate] = React.useState(false);
  const [confirmed, setConfirmed] = React.useState(false);

  const changeValidate = () => {
    setValidate((prev) => !prev);
  };

  const changeConfirmed = () => {
    setConfirmed((prev) => !prev);
  };

  return (
    <Routes>
      <Route
        path="/sign_up"
        element={
          validate ? (
            <Navigate to="/sign_in" replace />
          ) : (
            <SignUpForm changeValidate={changeValidate} />
          )
        }
      />
      <Route
        path="/sign_in"
        element={
          confirmed ? (
            <Navigate to="/" replace />
          ) : (
            <SignInForm changeConfirmed={changeConfirmed} />
          )
        }
      />
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/time-table" element={<Timetable />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/:spec" element={<DoctorsPage />}/>
        <Route path="/assign" element={<AssignPage />}/>
      </Route>
      {/* <Route path="/base" element={<Base />} /> */}
    </Routes>
  );
};

export default App;
