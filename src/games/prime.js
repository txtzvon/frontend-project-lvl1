import _ from 'lodash';
import { greetingUser, finalMessage, levelOfGame } from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const brainPrime = () => {
  greetingUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let result;
  let correctCounter = 0;

  do {
    const question = _.random(1, 100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    result = levelOfGame(question, correctAnswer);
    if (result === 'true') {
      correctCounter += 1;
    }
  } while (result === 'true' && correctCounter < 3);

  finalMessage(correctCounter);
};
export default brainPrime;
