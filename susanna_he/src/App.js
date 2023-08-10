// import logo from './logo.svg';
// import './App.css';

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import DiscordRedesign from "./pages/Work/DiscordRedesign/DiscordRedesign";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [currentPageName, setCurrentPageName] = useState("Home");

  useEffect(() => {
    document.title = `Susanna He | ${currentPageName}`;
  }, [currentPageName]);

  const handleRouteChange = (pageName) => {
    setCurrentPageName(pageName);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home onPageChange={handleRouteChange} />}
        />
        <Route
          path="/about"
          element={<About onPageChange={handleRouteChange} />}
        />
        <Route
          path="/discord-redesign"
          element={<DiscordRedesign onPageChange={handleRouteChange} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
