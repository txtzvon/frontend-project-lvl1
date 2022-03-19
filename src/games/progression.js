import * as indexJs from '../index.js';

const progressionOfNum = () => {
  indexJs.greetingUser();
  console.log('What number is missing in the progression?');

  let result;
  let correctCounter = 0;

  const searchElement = (collection, step, lastElement) => {
    const newArr = collection.split(' ');
    // eslint-disable-next-line no-shadow
    const result = lastElement - (step * (newArr.length - newArr.indexOf('..') - 1));
    return result;
  };

  do {
    const Array = [];
    let firstNum = indexJs.getRandomNum(1, 9);
    const stepOfProgression = indexJs.getRandomNum(1, 15);

    for (let i = 0; i < 10; i += 1) {
      firstNum += stepOfProgression;
      Array.push(firstNum);
    }
    Array[indexJs.getRandomNum(0, 9)] = '..';
    const question = Array.join(' ');
    const correctAnswer = String(searchElement(question, stepOfProgression, firstNum));
    result = indexJs.levelOfGame(question, correctAnswer);
    if (result === 'true') {
      correctCounter += 1;
    }
  } while (result === 'true' && correctCounter < 3);

  indexJs.finalMessage(correctCounter);
};

export default progressionOfNum;
