import { getRandomNum, engine } from '../index.js';

const launchCalculatorGame = () => {
  const instruction = 'What is the result of the expression?';

  const checkOfAnswer = (sing, x, y) => {
    switch (sing) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      case '*':
        return x * y;

      default:
        return null;
    }
  };

  const round = () => {
    const sings = ['+', '-', '*'];
    const randomOfSing = sings[getRandomNum(0, 2)];
    const numFirst = getRandomNum(1, 25);
    const numSecond = getRandomNum(1, 25);
    const question = `${numFirst} ${randomOfSing} ${numSecond}`;
    const correctAnswer = String(checkOfAnswer(randomOfSing, numFirst, numSecond));
    return [question, correctAnswer];
  };

  engine(instruction, round);
};
export default launchCalculatorGame;
