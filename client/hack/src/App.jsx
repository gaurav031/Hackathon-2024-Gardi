import { useState } from "react";

import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Hadder from "./components/Hadder/Hadder";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Service from "./components/Service/Service";
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import ProfileAppoitment from "./components/Profile/ProfileAppoitment";

function App() {
  const { userLogin } = useSelector((store) => store.login);
  console.log(userLogin);
  return (
    <>
      <Hadder />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="Services" element={<Service />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profileAppoinment" element={<ProfileAppoitment />} />
      </Routes>
      <Profile />
      <Footer />
    </>
  );
}

export default App;
