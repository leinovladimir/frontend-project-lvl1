import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandom from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2;

const generateData = () => {
  const question = getRandom(1, 100);
  const rightAnswer = isEven(question) ? 'no' : 'yes';
  return cons(question, rightAnswer);
};

export default () => playGame(generateData, description);
