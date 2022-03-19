import { getRandomNum, engine } from '../index.js';

const brainProgression = () => {
  const instruction = 'What number is missing in the progression?';
  const searchElement = (collection, step, lastElement) => {
    const newArr = collection.split(' ');
    // eslint-disable-next-line no-shadow
    const result = lastElement - (step * (newArr.length - newArr.indexOf('..') - 1));
    return result;
  };
  const round = () => {
    const progression = [];
    let firstNum = getRandomNum(1, 9);
    const stepOfProgression = getRandomNum(1, 15);
    for (let i = 0; i < 10; i += 1) {
      firstNum += stepOfProgression;
      progression.push(firstNum);
    }
    progression[getRandomNum(0, 9)] = '..';
    const question = progression.join(' ');
    const correctAnswer = String(searchElement(question, stepOfProgression, firstNum));
    return [question, correctAnswer];
  };
  engine(instruction, round);
};

export default brainProgression;
