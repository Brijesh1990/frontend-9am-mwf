import React from "react";

const ConditionalApp = () => {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please log in via login form.</h1>
      )}
    </div>
  );
};

export default ConditionalApp;
// This component checks if a user is logged in and displays a message accordingly.
// If the user is logged in, it shows "Welcome back!", otherwise it prompts to log in.