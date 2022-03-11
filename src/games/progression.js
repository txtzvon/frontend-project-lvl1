import _ from 'lodash';
import { greetingUser, finalMessage, levelOfGame } from '../index.js';

const progressionOfNum = () => {
  greetingUser();
  console.log('What number is missing in the progression?');

  let result;
  let correctCounter = 0;

  const searchElement = (collection, step, lastElement) => {
    const newArr = collection.split(' ');
    // eslint-disable-next-line no-shadow
    const result = lastElement - (step * (newArr.length - _.indexOf(newArr, '..') - 1));
    return result;
  };

  do {
    const Array = [];
    let firstNum = _.random(1, 9);
    const stepOfProgression = _.random(1, 15);

    for (let i = 0; i < 10; i += 1) {
      firstNum += stepOfProgression;
      Array.push(firstNum);
    }
    Array[_.random(0, 9)] = '..';
    const question = Array.join(' ');
    const correctAnswer = String(searchElement(question, stepOfProgression, firstNum));
    result = levelOfGame(question, correctAnswer);
    if (result === 'true') {
      correctCounter += 1;
    }
  } while (result === 'true' && correctCounter < 3);

  finalMessage(correctCounter);
};

export default progressionOfNum;
