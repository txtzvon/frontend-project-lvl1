import engine from '../index.js';
import getRandomNumber from '../util.js';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;

const formatingProgression = (firstNumber, step, skip) => {
  const progression = [];
  let countOfProgression = firstNumber;
  for (let i = 0; i < lengthProgression; i += 1) {
    countOfProgression += step;
    progression.push(countOfProgression);
  }
  progression[skip] = '..';
  return progression.join(' ');
};
const makeRound = () => {
  const firstNum = getRandomNumber(1, 9);
  const stepOfProgression = getRandomNumber(1, 15);
  const skippedPosition = getRandomNumber(0, lengthProgression - 1);
  const question = formatingProgression(firstNum, stepOfProgression, skippedPosition);
  const correctAnswer = String(firstNum + (stepOfProgression * (skippedPosition + 1)));
  return [question, correctAnswer];
};

const brainProgression = () => {
  engine(description, makeRound);
};

export default brainProgression;
