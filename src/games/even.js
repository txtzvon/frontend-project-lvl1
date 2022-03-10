import _ from 'lodash';
import { greetingUser, finalMessage, levelOfGame } from '../index.js';

export default function brainEven() {
  greetingUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

  let result;
  let correctCounter = 0;
  do {
    const question = _.random(1, 99);
    const correctAnswer = isEven(question);
    result = levelOfGame(question, correctAnswer);
    if (result === 'true') {
      correctCounter += 1;
    }
  } while (result === 'true' && correctCounter < 3);

  finalMessage(correctCounter);
}
