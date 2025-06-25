import React from 'react';
function App() {
  // multiple login systems
  const em = 'bk@gmail.com';
  const pass = 'b123';
  if (em == 'bk@gmail.com' && pass == 'b123456') {
    return <h1>You are successfully Logged In</h1>;
  } else {
    return <h1>Your email and Password are Wrong</h1>;
  }
  return (
    <>
      <h1>{}</h1>
    </>
  );
}

export default App;
