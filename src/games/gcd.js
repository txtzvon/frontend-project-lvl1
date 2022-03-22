import engine from '../index.js';
import getRandomNumber from '../utils/util.js';

const searchDivider = (x, y) => {
  let secondDiv = y;
  let firstDiv = x;
  while (secondDiv) {
    const t = secondDiv;
    secondDiv = firstDiv % secondDiv;
    firstDiv = t;
  }
  return firstDiv;
};

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
