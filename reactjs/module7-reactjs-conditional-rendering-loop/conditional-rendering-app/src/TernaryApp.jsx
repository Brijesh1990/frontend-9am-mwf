import React from 'react';
// function App() {
//   const age = 25;
//   const res = age >= 18 ? 'i am adult' : 'i am child';

//   return (
//     <>
//       <h1>{res}</h1>
//     </>
//   );
// }

function App() {
  const age = 15;
  const res = age >= 18 ? 'eligible for Vote' : 'Not eligible for Vote';

  return (
    <>
      <h1>{res}</h1>
    </>
  );
}

export default App;
