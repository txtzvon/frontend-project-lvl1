import engine from '../index.js';
import getRandomNumber from '../utils/util.js';

const isEven = (num) => num % 2 === 0;

const brainEvenGame = () => {
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';
  const round = () => {
    const question = getRandomNumber(1, 50);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  engine(instruction, round);
};

export default brainEvenGame;
