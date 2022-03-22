import engine from '../index.js';
import getRandomNumber from '../utils/util.js';

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
  const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const round = () => {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  engine(instruction, round);
};

export default brainPrime;
