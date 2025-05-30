import React from 'react'

function Greetings(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Welcome to our website.</p>
      <p>We hope you have a great experience!</p>
      <p>Feel free to explore and let us know if you have any questions.</p>
      <p>Enjoy your stay!</p>
    </div>
  )
}


function Getgreeting() {


        return (
            <>
                <h1><Greetings name="My name is Brijesh" /></h1>
               
            </>
        )
    }
export default Getgreeting
    