import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SignUpForm from "./components/forms/SignUpForm";
import SignInForm from "./components/forms/SignInForm";
import MainPage from "./components/pages/Main/MainPage";
import Base from "./components/options/Base/Base";
import Layout from "./components/layout/Layout";
import Profile from "./components/pages/Profile/Profile";
import UserProfile from "./components/pages/UserProfile/UserProfile";
import Timetable from "./components/pages/TimeTable/Timetable";
import Chats from "./components/pages/Chats/Chats";
import Favorites from "./components/pages/Favorites/Favorites";
import DoctorsPage from "./components/pages/Doctors/DoctorsPage";
import AssignPage from "./components/structures/assign/AssignPage";
import EditPage from "./components/pages/Profile/EditPage";

const App = () => {
  const [validate, setValidate] = React.useState(false);
  const [confirmed, setConfirmed] = React.useState(false);
  const [edited, setEdited] = React.useState(false);
  const [assigned, setAssigned] = React.useState(false);
  const [token, setToken] = React.useState(
    JSON.parse(localStorage.getItem("token"))
  );

  const addToken = (response) => {
    setToken(response);
  };

  const changeValidate = () => {
    setValidate((prev) => !prev);
  };

  const changeConfirmed = () => {
    setConfirmed((prev) => !prev);
  };

  const changeEdited = () => {
    setEdited((prev) => !prev);
  };

  const falseEdited = () => {
    setEdited(false);
  };

  const changeAssigned = () => {
    setAssigned((prev) => !prev);
  };

  const falseAssigned = () => {
    setAssigned(false);
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
            <SignInForm addToken={addToken} changeConfirmed={changeConfirmed} />
          )
        }
      />
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            token === null ? (
              <Navigate to="/sign_in" replace />
            ) : (
              <MainPage token={token} />
            )
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              accessToken={token?.accessToken}
              falseEdited={falseEdited}
            />
          }
        />
        <Route
          path="/profile/:id"
          element={
            assigned ? (
              <Navigate to="/" replace />
            ) : (
              <UserProfile changeAssigned={changeAssigned} accessToken={token.accessToken} />
            )
          }
        />
        <Route path="/timetable" element={<Timetable accessToken={token.accessToken} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/doctors/:id" element={<DoctorsPage />} />
        <Route
          path="/assign"
          element={
            assigned ? (
              <Navigate to="/" replace />
            ) : (
              <AssignPage
                changeAssigned={changeAssigned}
                falseAssigned={falseAssigned}
              />
            )
          }
        />
        <Route
          path="/edit"
          element={
            edited ? (
              <Navigate to="/profile" replace />
            ) : (
              <EditPage
                accessToken={token.accessToken}
                changeEdited={changeEdited}
              />
            )
          }
        />
      </Route>
      {/* <Route path="/base" element={<Base />} /> */}
    </Routes>
  );
};

export default App;
