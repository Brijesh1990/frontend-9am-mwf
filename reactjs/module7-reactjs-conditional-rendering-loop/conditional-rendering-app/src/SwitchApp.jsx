import React from 'react';
function App() {
  const grade = 'D';
  switch (grade) {
    case 'A':
      return <h1>You are topper</h1>;

    case 'B':
      return <h1>You are average</h1>;
    case 'C':
      return <h1>You are failed</h1>;

    default:
      return <h1>Your grade not found anywhere</h1>;
  }

  return (
    <>
      <h1></h1>
    </>
  );
}

export default App;
