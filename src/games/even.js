import { getRandomNum, engine } from '../index.js';

const brainEvenGame = () => {
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

  const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

  const round = () => {
    const question = getRandomNum(1, 50);
    const correctAnswer = isEven(question);
    return [question, correctAnswer];
  };

  engine(instruction, round);
};

export default brainEvenGame;
