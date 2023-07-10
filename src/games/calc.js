import { cons, car, cdr } from 'hexlet-pairs';
import playGame from '..';
import getRandom from '../utils';

const description = 'What is the result of the expression?';

const operators = [
  cons('+', (a, b) => (a + b)),
  cons('-', (a, b) => (a - b)),
  cons('*', (a, b) => (a * b)),
];

const generateData = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const operator = operators[getRandom(0, operators.length - 1)];
  const sign = car(operator);
  const operation = cdr(operator);
  const question = `${num1} ${sign} ${num2}`;
  const rightAnswer = String(operation(num1, num2));
  return cons(question, rightAnswer);
};

export default () => playGame(generateData, description);
