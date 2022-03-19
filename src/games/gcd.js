import { getRandomNum, engine } from '../index.js';

const brainGcd = () => {
  const instruction = 'Find the greatest common divisor of given numbers.';

  const divider = (x, y) => {
    while (y) {
      const t = y;
      // eslint-disable-next-line no-param-reassign
      y = x % y;
      // eslint-disable-next-line no-param-reassign
      x = t;
    }
    return x;
  };
  const round = () => {
    const firstNum = getRandomNum(1, 50);
    const secondNum = getRandomNum(1, 50);
    const question = `${firstNum} ${secondNum}`;
    const correctAnswer = String(divider(firstNum, secondNum));
    return [question, correctAnswer];
  };

  engine(instruction, round);
};

export default brainGcd;
