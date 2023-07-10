import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandom from '../utils';

const description = 'What number is missing in the progression?';

const length = 10;

const getQuestion = (start, step, indexOfMissingElement) => {
  let question = '';
  for (let i = 0; i < length; i += 1) {
    if (i === indexOfMissingElement) {
      question = question.concat(' ..');
    } else {
      const currentElement = start + i * step;
      question = question.concat(' ', currentElement);
    }
  }
  return question;
};

const generateData = () => {
  const start = getRandom(1, 10);
  const step = getRandom(1, 10);
  const indexOfMissingElement = getRandom(0, length - 1);
  const question = getQuestion(start, step, indexOfMissingElement);
  const rightAnswer = String(start + indexOfMissingElement * step);
  return cons(question, rightAnswer);
};

export default () => playGame(generateData, description);
