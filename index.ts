#! /usr/bin/env node
import inquirer from "inquirer";
let attempts:boolean = false ;
let user :{[x:string]:any} ={
    title: ' Muhammad Usama' ,
    accounType : 'Current' ,
    accountPin : '2054',
    currentBalance: 50000 ,
}
console.log(`Make sure to enter this user pin to login .`,user)
for (let i = 3; i >= 1; i--) {
    //User pin input
    let counter: number = i ;
  const firstAnswers = await inquirer.prompt([
    {
      message: "Enter Your 4-digit Pin :",
      type: "string",
      name: "pin",
    },
  ]);

// pin checking..
if(firstAnswers.pin.length !== 4){
    console.log(counter-1,'Attempts Left')
    continue
}
else if(firstAnswers.pin.length === 4 && firstAnswers.pin !== user.accountPin) {
    console.log(counter-1,'Attempts Left')
    continue
}
else{
    attempts =true
    break
}
}
if (attempts === false ){
console.log('Ups ! your account is blocked.')
}
else {
    // more data collection
    console.log('Successfully login!')
    const secondAnswers = await inquirer.prompt([ {
        message: "Account Type :",
        type: "list",
        name: "account",
        choices: ["Current", "Saving"],
      },
      {
        message: "What you wanna perform :",
        type: "list",
        name: "options",
        choices: ["Cash Withdraw", "Balance Inquiry"],
      },]) ;
//  now machine process
if(secondAnswers.account === 'Current')
{
    switch(secondAnswers.options)
    {
        case 'Cash Withdraw':
            {
                let transactionCash = await inquirer.prompt([{message:'Enter Transaction amount :',type:'number' ,name :'cash'}]);
                console.log('Successfully processed ypur transaction ')
                user.currentBalance = user.currentBalance - transactionCash.cash
                console.log(`your remining balance is : ${user.currentBalance}`) 
                break
            }
        case 'Balance Inquiry':
            {
                console.log(`your remining balance is : ${user.currentBalance}`) 
                break
            }
    }
}
else if(secondAnswers.account === 'Saving')
{
    console.log('interest of 10% will be added in current balance')
    user.currentBalance = user.currentBalance + (user.currentBalance*10)/100
    switch(secondAnswers.options)
    {
        case 'Cash Withdraw':
            {   
                let transactionCash = await inquirer.prompt([{message:'Enter Transaction amount :',type:'number' ,name :'cash'}]);
                console.log('Successfully processed ypur transaction ')
                user.currentBalance = user.currentBalance - transactionCash.cash
                console.log(`your remining balance is : ${user.currentBalance}`) 
                break
            }
        case 'Balance Inquiry':
            {
                console.log(`your remining balance is : ${user.currentBalance}`) 
                break
            }
    }
}
}
