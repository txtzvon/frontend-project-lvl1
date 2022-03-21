import engine from '../index.js';
import { getRandomNumber, countingWithRandomeSign, getRandomSing } from '../utils/util.js';

const launchCalculatorGame = () => {
  const instruction = 'What is the result of the expression?';
  const round = () => {
    const randomOfSing = getRandomSing();
    const numFirst = getRandomNumber(1, 25);
    const numSecond = getRandomNumber(1, 25);
    const question = `${numFirst} ${randomOfSing} ${numSecond}`;
    const correctAnswer = String(countingWithRandomeSign(randomOfSing, numFirst, numSecond));
    return [question, correctAnswer];
  };

  engine(instruction, round);
};
export default launchCalculatorGame;
