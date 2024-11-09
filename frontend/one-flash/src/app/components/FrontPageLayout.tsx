import React from 'react';
import RegisterButton from "./RegisterButton";
import LoginButton from "./LoginButton";

// could pass in a logged in prop and use 
// checks for what to display

function FrontPageLayout() {
    return (
      <div className="layout">
        <h1 className="slogan">One flash at a time.</h1>
        <p className="hook">Ascend to academic success with flash cards</p>
        
        <div className="button-container">
          <RegisterButton />
          <LoginButton />
        </div>
      </div>
    );
  }
  
export default FrontPageLayout;