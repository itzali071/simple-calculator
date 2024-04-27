#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First number:", type: "number", name: "FirstNumber" },
    { message: "Enter Second number:", type: "number", name: "SecondNumber" },
    {
        message: "Select the operation:",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (answer.operators === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operators === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
