import engine from '../index.js';
import getRandomNumber from '../util.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcb = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcb(num2, num1 % num2);
};
const makeRound = () => {
  const firstNum = getRandomNumber(1, 50);
  const secondNum = getRandomNumber(1, 50);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(gcb(firstNum, secondNum));
  return [question, correctAnswer];
};
const brainGcd = () => {
  engine(description, makeRound);
};

export default brainGcd;
