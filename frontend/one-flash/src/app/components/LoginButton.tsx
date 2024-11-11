import React from 'react';

interface LoginButtonProps {
  onClick: unknown; 
}

function LoginButton({ onClick }) {  
  return (
   <button className="LoginButton" onClick={onClick}>Log In</button>
  );
}

export default LoginButton;
