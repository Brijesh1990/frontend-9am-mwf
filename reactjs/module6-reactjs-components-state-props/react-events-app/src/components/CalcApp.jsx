import React from "react";
import Swal from "sweetalert2";
function Add()
{
    // let a=document.getElementById("number1").value;
    // let b=document.getElementById("number2").value;

    let a=parseInt(prompt('Enter first number:'));
    let b=parseInt(prompt('Enter second number:'));

    let result=Number(a)+Number(b);
    Swal.fire({
        title: "Result",
        text: "The sum is: "+result,
        icon: "success",
        confirmButtonText: "Cool"
    });

}

function Subs()
{
    // let a=document.getElementById("number1").value;
    // let b=document.getElementById("number2").value;
    
    let a=parseInt(prompt('Enter first number:'));
    let b=parseInt(prompt('Enter second number:'));

    let result=Number(a)-Number(b);
    Swal.fire({
        title: "Result",
        text: "The difference is: "+result,
        icon: "success",
        confirmButtonText: "Cool"
    });
}

function Mul()
{
    // let a=document.getElementById("number1").value;
    // let b=document.getElementById("number2").value;
    
    let a=parseInt(prompt('Enter first number:'));
    let b=parseInt(prompt('Enter second number:'));

    let result=Number(a)*Number(b);
    Swal.fire({
        title: "Result",
        text: "The product is: "+result,
        icon: "success",
        confirmButtonText: "Cool"
    });
}

function Div()
{
    // let a=document.getElementById("number1").value;
    // let b=document.getElementById("number2").value;

    let a=parseInt(prompt('Enter first number:'));
    let b=parseInt(prompt('Enter second number:'));

    let result=Number(a)/Number(b);
    Swal.fire({
        title: "Result",
        text: "The product is: "+result,
        icon: "success",
        confirmButtonText: "Cool"
    });
}

export {Add,Subs,Mul,Div};