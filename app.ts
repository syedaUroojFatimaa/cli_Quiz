#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.red("\nWelcome To My Quiz Game:"));
console.log(chalk.blue("\nYou Are Required To Gain Maximum 4 Points...\n"));

let points = 0

let Ques1 = await inquirer.prompt([
    {
        name: "one",
        message: chalk.yellow("Typescript is a superset of ?"),
        type: "list",
        choices: ["Python","C++","Java","JavaScript"]
    }
]) 

if(Ques1.one == "JavaScript"){
    console.log(chalk.red("\nYour Answer Is Correct!\n"));
    points++
}
else{
    console.log(chalk.green("\nYour Answer Is InCorrect!\n"));
}

let Ques2 = await inquirer.prompt([
    {
        name: "two",
        message: chalk.yellow("Who Is The Founder of Microsoft ?"),
        type: "list",
        choices: ["Elon Musk","Bill Gates","Mark","Ali"]
    }
]) 

if(Ques2.two == "Bill Gates"){
    console.log(chalk.red("\nYour Answer Is Correct!\n"));
    points++
}
else{
    console.log(chalk.green("\nYour Answer Is InCorrect!\n"));
}

let Ques3 = await inquirer.prompt([
    {
        name: "three",
        message: chalk.yellow("What is the Capital of Pakistan?"),
        type: "list",
        choices: ["Karachi","KPK","Islamabad","Lahore"]
    }
]) 

if(Ques3.three == "Islamabad"){
    console.log(chalk.red("\nYour Answer Is Correct!\n"));
    points++
}
else{
    console.log(chalk.green("\nYour Answer Is InCorrect!\n"));
}

let Ques4 = await inquirer.prompt([
    {
        name: "four",
        message: chalk.yellow("Who is the Current Governor of Sindh ?"),
        type: "list",
        choices: ["Abbas","Kamran Tessori","Ali","Wajahat"]
    }
]) 

if(Ques4.four == "Kamran Tessori"){
    console.log(chalk.red("\nYour Answer Is Correct!\n"));
    points++
}
else{
    console.log(chalk.green("\nYour Answer Is InCorrect!\n"));
}

let Ques5 = await inquirer.prompt([
    {
        name: "five",
        message: chalk.yellow("In which Country Nam Sam Tower is Located ?"),
        type: "list",
        choices: ["South Korea","London","Dubai","Canada"]
    }
]) 

if(Ques5.five == "South Korea"){
    console.log(chalk.red("\nYour Answer Is Correct!\n"));
    points++
}
else{
    console.log(chalk.green("\nYour Answer Is InCorrect!\n"));
}

if(points >= 4){
    console.log(chalk.magentaBright("Congratulation!"));
    console.log(chalk.blue(`\nYour points are ${points}`));
}
else{
    console.log(chalk.yellowBright("You Loss!"));
    console.log(chalk.blue(`\nYour points are ${points}`));
}