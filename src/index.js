import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import Home from "./Components/Home";
import JavaQuestions from "./Components/JavaQuestions";
import PythonQuestions from "./Components/PythonQuestions";
import JavaScriptQuestions from "./Components/JavaScriptQuestions";
import HTMLQuestions from "./Components/HtmlQuestions";
import CSSQuestions from "./Components/CssQuestions";
import ReactQuestions from "./Components/ReactQuestions";
import SQLQuestions from "./Components/SQLQuestions";

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('home'); // Set 'home' by default

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div>
      <h1 className="header">Questions and Answers</h1>
      <Header handleLanguageChange={handleLanguageChange} />
      <div className="content">
        {selectedLanguage === 'home' && <Home />} {/* Render Home component by default */}
        {selectedLanguage === 'java' && <JavaQuestions />}
        {selectedLanguage === 'python' && <PythonQuestions />}
        {selectedLanguage === 'javascript' && <JavaScriptQuestions />}
        {selectedLanguage === 'html' && <HTMLQuestions />}
        {selectedLanguage === 'css' && <CSSQuestions />}
        {selectedLanguage === 'react' && <ReactQuestions />}
        {selectedLanguage === 'sql' && <SQLQuestions />}
      </div>
      <Footer />
    </div>
  );
}

function Header({ handleLanguageChange }) {
  return (
    <div className="header">
      <nav>
        <ul>
          <li><a href='#' onClick={() => handleLanguageChange('home')}>Home</a></li>
          <li><a href='#' onClick={() => handleLanguageChange('java')}>Java</a></li>
          <li><a href='#' onClick={() => handleLanguageChange('python')}>Python</a></li>
          <li><a href='#' onClick={() => handleLanguageChange('javascript')}>JavaScript</a></li>
          <li><a href='#' onClick={() => handleLanguageChange('html')}>HTML</a></li>
          <li><a href='#' onClick={() => handleLanguageChange('css')}>CSS</a></li>
          <li><a href='#' onClick={() => handleLanguageChange('react')}>React</a></li>
          <li><a href='#' onClick={() => handleLanguageChange('sql')}>SQL</a></li>
        </ul>
      </nav>
    </div>
  );
}

function Footer() {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const currentdate = new Date();
    const formattedDateTime =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();

    setDateTime(formattedDateTime);
  }, []);

  return (
    <div className='footer'>
      <h1>Date: {dateTime}</h1>
    </div>
  );
}
