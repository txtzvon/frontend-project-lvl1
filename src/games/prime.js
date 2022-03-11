import _ from 'lodash';
import { greetingUser, finalMessage, levelOfGame } from '../index.js';

const isPrime = (num) => {
  let flag = 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      flag = 'no';
    }
  }
  return flag;
};

const brainPrime = () => {
  greetingUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let result;
  let correctCounter = 0;

  do {
    const question = _.random(2, 100);
    const correctAnswer = isPrime(question);
    result = levelOfGame(question, correctAnswer);
    if (result === 'true') {
      correctCounter += 1;
    }
  } while (result === 'true' && correctCounter < 3);

  finalMessage(correctCounter);
};
export default brainPrime;
