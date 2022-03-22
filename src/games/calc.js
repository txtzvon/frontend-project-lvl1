import engine from '../index.js';
import getRandomNumber from '../utils/util.js';

const getResultCounting = (sing, x, y) => {
  switch (sing) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;

    default:
      throw new Error(`Unknown order state: '${sing}'!`);
  }
};

const getRandomOretator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumber(0, 2)];
};

const launchCalculatorGame = () => {
  const instruction = 'What is the result of the expression?';
  const round = () => {
    const randomOfSing = getRandomOretator();
    const numFirst = getRandomNumber(1, 25);
    const numSecond = getRandomNumber(1, 25);
    const question = `${numFirst} ${randomOfSing} ${numSecond}`;
    const correctAnswer = String(getResultCounting(randomOfSing, numFirst, numSecond));
    return [question, correctAnswer];
  };

  engine(instruction, round);
};
export default launchCalculatorGame;
