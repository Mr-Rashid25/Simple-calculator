#! /usr/bin/env node
import inquirer from "inquirer";
const Answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (Answer.operator === "Addition") {
    console.log(Answer.firstNumber + Answer.secondNumber);
}
else if (Answer.operator === "Subtraction") {
    console.log(Answer.firstNumber - Answer.secondNumber);
}
else if (Answer.operator === "Multiplication") {
    console.log(Answer.firstNumber * Answer.secondNumber);
}
else if (Answer.operator === "Division") {
    console.log(Answer.firstNumber / Answer.secondNumber);
}
else {
    console.log("plz select a valid operator");
}
;
