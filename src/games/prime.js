import engine from '../index.js';
import { getRandomNumber, isPrime } from '../utils/util.js';

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
