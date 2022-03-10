import _ from 'lodash';
import { greetingUser, finalMessage, levelOfGame } from '../index.js';

const largestDivider = () => {
  greetingUser();
  console.log('Find the greatest common divisor of given numbers.');

  let result;
  let correctCounter = 0;

  const divider = (x, y) => {
    while (y) {
      const t = y;
      // eslint-disable-next-line no-param-reassign
      y = x % y;
      // eslint-disable-next-line no-param-reassign
      x = t;
    }
    return x;
  };

  do {
    const firstNum = _.random(1, 50);
    const secondNum = _.random(1, 50);
    const question = `${firstNum} ${secondNum}`;
    const correctAnswer = String(divider(firstNum, secondNum));
    result = levelOfGame(question, correctAnswer);
    if (result === 'true') {
      correctCounter += 1;
    }
  } while (result === 'true' && correctCounter < 3);

  finalMessage(correctCounter);
};

export default largestDivider;
