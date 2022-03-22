import engine from '../index.js';
import getRandomNumber from '../utils/util.js';

const getResultCounting = (collection, step, lastElement) => {
  const newArr = collection.split(' ');
  const result = lastElement - (step * (newArr.length - newArr.indexOf('..') - 1));
  return result;
};

const formatingProgression = () => {
  const progression = [];
  let firstNum = getRandomNumber(1, 9);
  const stepOfProgression = getRandomNumber(1, 15);
  for (let i = 0; i < 10; i += 1) {
    firstNum += stepOfProgression;
    progression.push(firstNum);
  }
  progression[getRandomNumber(0, 9)] = '..';
  const randomProgression = progression.join(' ');
  return [firstNum, stepOfProgression, randomProgression];
};

const brainProgression = () => {
  const instruction = 'What number is missing in the progression?';

  const round = () => {
    const [firstNum, stepOfProgression, question] = formatingProgression();
    const correctAnswer = String(getResultCounting(question, stepOfProgression, firstNum));
    return [question, correctAnswer];
  };
  engine(instruction, round);
};

export default brainProgression;
