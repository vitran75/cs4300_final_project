import React from 'react';


interface LoginButtonProps {
  onClick: unknown; 
}

function RegisterButton( {onClick} ) {
  return (
   <button className="RegisterButton" onClick={onClick}>Register</button>
  );
}

export default RegisterButton;
