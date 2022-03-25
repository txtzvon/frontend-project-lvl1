import engine from '../index.js';
import getRandomNumber from '../util.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;
const makeRound = () => {
  const question = getRandomNumber(1, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainEvenGame = () => {
  engine(description, makeRound);
};

export default brainEvenGame;
