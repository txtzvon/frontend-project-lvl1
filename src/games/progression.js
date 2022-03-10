import _ from 'lodash';
import { greetingUser, finalMessage, levelOfGame } from '../index.js';

const progressionOfNum = () => {
  greetingUser();
  console.log('What number is missing in the progression?');

  let result;
  let correctCounter = 0;

do {
    const Array = [];
    const stepOfProgression = _.random(1, 15);
    for (let i = 0; i < 10; i += 1) {
      Array.push(stepOfProgression);
    }
    Array[_.random(0, 9)] = '..';
    const StringOfArray = Array.join(' ');
    const question = Array.join(' ');
    // const correctAnswer = String(divider(firstNum, secondNum));
    result = levelOfGame(question, correctAnswer);
    if (result === 'true') {
      correctCounter += 1;
    }
  } while (result === 'true' && correctCounter < 3);

  finalMessage(correctCounter);
};

export default progressionOfNum;