"use client";

import React, { useState } from 'react';
import RegisterButton from "./RegisterButton";
import LoginButton from "./LoginButton";
import LoginPage from "./LoginPage"; 

function FrontPageLayout() {
  const [showLogin, setShowLoginPage] = useState(false);

  return (
    <div className="layout">
      <h1 className="slogan">One flash at a time.</h1>
      <p className="hook">Ascend to academic success with flash cards</p>
      
      <div className="button-container">
        <RegisterButton onClick={() => setShowLoginPage(true)} />
        <LoginButton onClick={() => setShowLoginPage(true)} />
        {showLogin && <LoginPage onClose={() => setShowLoginPage(false)}/>}
      </div>
    </div>
  );
}

export default FrontPageLayout;
