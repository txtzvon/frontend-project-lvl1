import {
  greetingUser, finalMessage, levelOfGame, getRandomNum,
} from '../index.js';

const Calculator = () => {
  greetingUser();
  console.log('What is the result of the expression?');

  const sings = ['+', '-', '*'];
  let result;
  let correctCounter = 0;

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

  do {
    const randomOfSing = sings[getRandomNum(0, 2)];
    const numFirst = getRandomNum(1, 25);
    const numSecond = getRandomNum(1, 25);
    const question = `${numFirst} ${randomOfSing} ${numSecond}`;
    const correctAnswer = String(checkOfAnswer(randomOfSing, numFirst, numSecond));
    result = levelOfGame(question, correctAnswer);
    if (result === 'true') {
      correctCounter += 1;
    }
  } while (result === 'true' && correctCounter < 3);
  finalMessage(correctCounter);
};

export default Calculator;
