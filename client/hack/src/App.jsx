import { useState } from "react";

import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Hadder from "./components/Hadder/Hadder";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Service from "./components/Service/Service";
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import Book from "./components/Book/Book";
import Pay from "./components/Pay/Pay";
import Card from "./components/Card/Card";
import Appoinment from "./components/Appoinment/Appoinment"
import Chatpage from "./components/Chatpage/Chatpage";
import ParentComponent from "./components/Filter/ParentComponent";

function App() {
  return (
    <>
      <Hadder />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="Services" element={<Service/>}/>
        <Route path="/book" element={<Book/>}/>
        <Route path="/pay" element={<Pay/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/card" element={<Card />} />
        <Route path="/appoinment" element={<Appoinment />} />
        <Route path="/chatpage" element={<Chatpage />} />
        <Route path="/filter" element={<ParentComponent />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
