#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

greetings();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const numList = [15, 6, 7];

const checkForEven = (number) => (number % 2 === 0) ? true : false; 

let expectedAnswer, win;
for (const num of numList) {
    (checkForEven(num)) ? expectedAnswer = 'yes' : expectedAnswer = 'no';
    console.log(`Question: ${num}`);
    const givenAnswer = readlineSync.question(`Your answer: `);
    if (expectedAnswer == givenAnswer) { 
        console.log('Correct!');
        win = true;
    } else {
        console.log(`'${givenAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}!`)
        win = false;
        break;
    }
}

if (win) { console.log(`Congratulations, ${name}`)}