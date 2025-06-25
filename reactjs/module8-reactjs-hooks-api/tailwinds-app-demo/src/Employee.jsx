import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Chart } from 'react-google-charts';
import Swal from 'sweetalert2';

function Employee() {
  // initialization of state
  // destructuring data in array

  const [emp, setEmployee] = useState({
    id: 1,
    name: 'Rishi khatri',
    age: 24,
    salary: 23500,
    department: 'IT',
    employeeId: 'RJ111',
  });

  //   create a  function for update data

  const upData = (e) => {
    e.preventDefault();
    setEmployee({
      id: 1,
      name: 'Vaibhav Patel',
      age: 25,
      salary: 25500,
      department: 'CSE',
      employeeId: 'RJ112',
    });
    // pass a sweet alert messages
    Swal.fire({
      title: 'Wow',
      text: 'Thanks your data is updated successfully ?',
      icon: 'success',
    });
  };

  //   create a pie chart to display data
  const data = [
    ['Task', 'Hours per Day'],
    ['Work', 9],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ];

  const options = {
    title: 'My Daily Activities',
  };

  return (
    <>
      <div className="w-full flex bg-amber-400 p-5 mt-5 mx-auto">
        <div className="w-1/2 bg-transparent mt-14">
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={'100%'}
            height={'325px'}
          />
        </div>

        <div className="w-1/2">
          <h1 class="text-3xl font-bold underline">Employee details</h1>
          <div className="p-15 bg-white mt-5">
            <p>
              <b>Employee Id is :</b>
              {emp.id}
            </p>

            <p>
              <b>Employee Name is :</b>
              {emp.name}
            </p>
            <p>
              <b>Employee Age is :</b>
              {emp.age}
            </p>
            <p>
              <b>Employee salary is :</b>
              {emp.salary}
            </p>
            <p>
              <b>Employee Department is :</b>
              {emp.department}
            </p>
            <p>
              <b>Employee JOB Id is :</b>
              {emp.employeeId}
            </p>

            <button
              type="button"
              onClick={upData}
              className="p-2 mt-5 bg-black text-white rounded-4xl flex"
            >
              Update employee Data
              <span className="ms-2 mt-1">
                <FaEdit />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employee;
