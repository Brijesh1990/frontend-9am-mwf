import React, { useState } from 'react';

// function EmployeeApp() {
//   // destructured of data
//   const [name, setName] = useState('Brijesh kumar pandey');
//   // name is a variables i.e used to stored data in state object
//   // setName is a function i.e used to call to update data in state object

//   return (
//     <>
//       <h1>Employee details is : {name} </h1>
//       <button
//         type="button"
//         id="btn"
//         onClick={() => {
//           setName('Nishita Rathod');
//         }}
//       >
//         Update details
//       </button>
//     </>
//   );
// }

function EmployeeApp() {
  // destructured of data

  // name is a variables i.e used to stored data in state object
  // setName is a function i.e used to call to update data in state object
  const [name, setName] = useState({
    id: 1001,
    name: 'Brijesh kumar pandey',
    age: 35,
    department: 'IT',
    salary: 89500,
    education: 'Mtech(IT)',
  });

  //   update all data in object

  const updData = () => {
    setName({
      id: 1001,
      name: 'Mann Patel',
      age: 25,
      department: 'CSE',
      salary: 19500,
      education: 'BE(CSE)',
    });
  };

  return (
    <>
      {/* <h1>Employee details is : {name} </h1> */}

      <h1>
        Employee details is : {name.id} <br /> name is : {name.name} <br /> age
        is : {name.age} <br /> departments is : {name.department} <br /> his
        salary is : {name.salary} <br /> and his educations is :{' '}
        {name.education}
      </h1>
      <button type="button" id="btn" onClick={updData}>
        Update details
      </button>
    </>
  );
}

export default EmployeeApp;
