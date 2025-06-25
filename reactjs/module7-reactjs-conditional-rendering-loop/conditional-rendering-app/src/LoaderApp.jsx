import React, { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  //   create a useEffect for loading data

  useEffect(() => {
    setTimeout(() => {
      setData('All Data fetched Here or display here');
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      <div>
        {isLoading ? <h1>Just Loading....</h1> : <h1>{data}</h1>}
        <h1></h1>
      </div>
    </>
  );
}

export default App;
