
let str="";

let input=document.querySelector("input");
let btn=document.querySelectorAll("button");
let del=document.getElementById("del");

const getDisplaySymbol=(value)=>{
  switch (value) {
      
      case "*": return "x";
      case "/": return "÷";
    
  
    default: return value;
     
  }
}
const updateScreen=()=>{
      input.value=str;
}
    
 let arr=Array.from(btn);
 
 arr.forEach((button)=>{
    button.addEventListener("click",(e)=>{
   const value=e.currentTarget.getAttribute("value");
   if(value ==="AC"){
    str="";
    }
     else if( value==="EXE"){
  try{

    let expression=str.replace(/x/g,"*").replace(/÷/g,"/");
      str=eval(expression);
  }
  catch(error){
    str="error";
 }
   }
    else if(value!=="del"){
        str+=getDisplaySymbol(value);
    }


    updateScreen();
    });
 });

 del.addEventListener("click",(e)=>{
   str=str.substring(0,str.length-1);
 updateScreen();
 
 });



7