#! /usr/bin/env node
import inquirer from "inquirer";
const systemGeneratedNumber = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        type: "Number",
        name: "guessNumber",
        Message: "Guess a number between 1 to 10",
    },
]);
if (answer.guessNumber === systemGeneratedNumber) {
    console.log("Your guess is correct \n You win");
}
else {
    console.log("Better luck try next time");
}
console.log("Your guess:", answer.guessNumber, "systemGeneratedNumber:", systemGeneratedNumber);
