import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberOfSteps = 3;

const playGame = (generateData, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let i = 0; i < numberOfSteps; i += 1) {
    const result = generateData();
    const question = car(result);
    const rigthAnswer = cdr(result);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rigthAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default playGame;
