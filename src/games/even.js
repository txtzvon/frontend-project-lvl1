import {
  greetingUser, finalMessage, levelOfGame, getRandomNum,
} from '../index.js';

export default function brainEven() {
  greetingUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

  let result;
  let correctCounter = 0;
  do {
    const question = getRandomNum(1, 50);
    const correctAnswer = isEven(question);
    result = levelOfGame(question, correctAnswer);
    if (result === 'true') {
      correctCounter += 1;
    }
  } while (result === 'true' && correctCounter < 3);

  finalMessage(correctCounter);
}
