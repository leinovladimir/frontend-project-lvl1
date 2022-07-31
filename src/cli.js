/* eslint no-console: [0, { allow: ["warn", "error"] }] */

import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return null;
};

export default greetings;
