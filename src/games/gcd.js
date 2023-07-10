import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandom from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (a === b) {
    return a;
  }
  const c = (a > b) ? b : a;
  const d = (a > b) ? a : b;
  return getGCD(c, d - c);
};

const generateData = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = String(getGCD(num1, num2));
  return cons(question, rightAnswer);
};

export default () => playGame(generateData, description);
