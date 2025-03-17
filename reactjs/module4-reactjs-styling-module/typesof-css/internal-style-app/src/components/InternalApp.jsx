import React from "react";
export default function InternalApp()
{
    return(
        <>
            <section id="content">
                <div className="leftsidebar">
                    <h2>Get address</h2>
                    <p>101, Aditya Complex, Jalaram 2 Street Number 2, above Sbi Bank, Near Indira Circle, Jala Ram Nagar, Rajkot, Gujarat 360005</p>
                </div>
                <div className="rightsidebar">
                    <h2>Get Map</h2>
                    <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.679931494302!2d70.7723802740499!3d22.290111043267054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0xdf5ac10af64ac8ee!2sTOPS%20Technologies!5e0!3m2!1sen!2sin!4v1742183153317!5m2!1sen!2sin" width="100%" height="250" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
                </div>
            </section>
        </>
    )
}