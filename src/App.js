import React from "react";
import "./App.css";
import Company from "./components/Company";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import News from "./components/News";
import Mission from "./components/Mission";
import Member from "./components/Member";
import Contact from "./components/Contact";
import Recruit from "./components/Recruit";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Mission />
      <News />
      <Contact />
      <Recruit />
      <Member />
      <Company />
      <Footer />
    </div>
  );
}

export default App;
