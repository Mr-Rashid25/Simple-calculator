#! /usr/bin/env node
import inquirer from "inquirer";
let loop = true; 
while(loop){
  
  const userInput = await inquirer.prompt([
    {
      type:"number",
      name:"num1",
      message:"Enter your first number: ",
    },{
      type:"number",
      name:"num2",
      message:"Enter your second number: ",
    },
    {
      type:"list",
      name:"operator",
      choices:["Addition","Subtraction","Multiplication","Division","Modulus","Exit"],
      message:"Please select an operator."
    
    },
  ]);
  const num1 = userInput.num1;
  const num2 = userInput.num2;
  const operator = userInput.operator;
  if (num1 && num2){
    if(operator === "Addition")
    {console.log(`\nThe sum of ${num1} + ${num2} = ${num1 + num2}` );
  }else if(operator === "Subtraction"){
    console.log(`\nThe answer of ${num1} - ${num2} = ${num1 - num2}`);
    
}
  else if(operator === "Multiplication"){
    console.log(`\nThe answer of ${num1} * ${num2} = ${num1 * num2}`);
}else if(operator === "Division"){
  console.log(`\nThe answer of ${num1} / ${num2} = ${num1 / num2}`);
  }
else if(operator === "Modulus"){  
  console.log(`\nThe answer of ${num1} % ${num2} = ${num1 % num2}`);
}else if(operator === "Exit"){ 
  console.log('\nSuccessfully Exit.\nThank you! ');
  loop = true
  }
}else{
  console.log("Plz enter a valid number.");
  
}
const calculateMore = await inquirer.prompt({
  type:"confirm",
  name:"more",
  message:"Do you want more calculations?",
  default:false
});
if(!calculateMore.more){
  loop = false;
  console.log("\nThank you !");
  
}
}