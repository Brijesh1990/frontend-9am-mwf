import React,{Component} from 'react'

const name="Brijesh kumar pandey";
const age=34;
class Employee extends Component
{
    
    render()
    {
        return(
            <>
                <h1>This is a class based components examples</h1>
                <h3>Employee details is : </h3>
                <h4>Name of employee is :{name} <br /> and age of employee is : {age}</h4>
            </>
        )
    }
}

export default Employee