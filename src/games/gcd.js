import engine from '../index.js';
import { getRandomNumber, searchDivider } from '../utils/util.js';

const brainGcd = () => {
  const instruction = 'Find the greatest common divisor of given numbers.';
  const round = () => {
    const firstNum = getRandomNumber(1, 50);
    const secondNum = getRandomNumber(1, 50);
    const question = `${firstNum} ${secondNum}`;
    const correctAnswer = String(searchDivider(firstNum, secondNum));
    return [question, correctAnswer];
  };

  engine(instruction, round);
};

export default brainGcd;
