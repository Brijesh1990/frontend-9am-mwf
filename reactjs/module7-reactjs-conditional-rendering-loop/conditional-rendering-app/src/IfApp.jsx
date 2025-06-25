import React from 'react';
// function App() {
//   // if condition is executed when conditions is true
//   const age = 15;
//   if (age >= 18) {
//     return <h1>I am eligible for Voting</h1>;
//   } else {
//     return <h1>I am not eligible for voting</h1>;
//   }

//   return (
//     <>
//       <h1>If condition examples</h1>
//     </>
//   );
// }

function App({ name, isPacked }) {
  if (isPacked) {
    return <li>{name} Product successfully returned</li>;
  } else {
    return <li>{name} Sorry something went wrong</li>;
  }

  return (
    <>
      <h1></h1>
    </>
  );
}

export default App;
