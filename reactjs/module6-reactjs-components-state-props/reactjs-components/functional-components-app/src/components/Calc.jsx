import React from "react";
function Add()
{
    var a=parseInt(prompt("Enter a Number : "));
    var b=parseInt(prompt("Enter b Number : "));
    var c=a+b;
    alert('The additions of numbers is :'+c)
}
function Subs()
{
    var a=parseInt(prompt("Enter a Number : "));
    var b=parseInt(prompt("Enter b Number : "));
    var c=a-b;
    
    alert('The substractions of numbers is :'+c)
}
export {Add,Subs}