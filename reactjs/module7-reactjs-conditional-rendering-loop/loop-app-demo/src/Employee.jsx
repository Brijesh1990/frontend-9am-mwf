import React, { useState } from 'react';
import Data from './Data';
function EmployeeApp() {
  // destructuring of data
  const [data, setData] = useState('');

  return (
    <>
      <div className="w-75 mx-auto shadow p-5 mt-5">
        <h2>Employee details</h2>

        {/* applied a loop here (map) */}
        <div className="row">
          {Data &&
            Data.map((items) => {
              return (
                <>
                  <div className="col-md-3 p-1 shadow m-3 ms-3">
                    <p>
                      <b>
                        <img
                          src={items.photo}
                          alt="employee"
                          className="img-fluid"
                          style={{ width: '60%', height: '150px' }}
                        />
                      </b>
                    </p>
                    <p>
                      <b>Employee Name : </b>
                      {items.name}
                    </p>

                    <p>
                      <b>Employee Age :</b>
                      {items.age}
                    </p>

                    <p>
                      <b>Employee Department : </b>
                      {items.department}
                    </p>

                    <p>
                      <b>Employee Salary : </b>
                      {items.salary}
                    </p>
                    <p>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger text-white"
                      >
                        Click for more details
                      </button>
                    </p>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default EmployeeApp;
