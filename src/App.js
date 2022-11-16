import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";

import Navbar from "./components/layout/header/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const projectsList = [
  {
    key: "img1",
    title: "Web Calculator",
    date: new Date("27 Dec 2021"),
    image: require("./images/web-calculator.png"),
    descShort: "A web calculator made with HTML, CSS, and JavaScript",
    descLong:
      "This is a web calculator that I made using JavaScript, HTML, and CSS for my JavaScript bootcamp project. This calculator can do addition, subtraction, multiplication, and division.",
    url: "https://github.com/Kennethvk/Web-Calculator",
  },
  {
    key: "img2",
    title: "Tutoring App",
    date: new Date("5 May 2022"),
    image: require("./images/tutoring-app.png"),
    descShort: "A tutoring app made with Android Studio and Firebase",
    descLong:
      "This is the final project for my mobile app course from Bina Nusantara Computer Club (BNCC). This app uses firebase as its database and has features such as registration, login, number counter, area calculator, and volume calculator.",
    url: "https://github.com/Kennethvk/LnTFinalProject_Mobile-G_Kenneth-Vincent-Kwandou",
  },
];

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects"
          element={<Projects projectsList={projectsList} />}
        />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
