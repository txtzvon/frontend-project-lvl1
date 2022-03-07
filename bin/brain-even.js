import _ from 'lodash';
import readlineSync from 'readline-sync';
import { getName, nameOfUser } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
getName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let countOfAttempts = 0;
// eslint-disable-next-line consistent-return
const askQuestion = () => {
  const randomeCount = _.random(1, 99);
  if (countOfAttempts === 3) {
    return console.log(`Congratulatin, ${nameOfUser}!`);
  }
  console.log(`Question: ${randomeCount}`);
  const answerOfQuestion = readlineSync.question('Your answer ');
  let rightAnswer;
  if (randomeCount % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  if (answerOfQuestion === rightAnswer) {
    console.log('Correct!');
    countOfAttempts += 1;
    askQuestion();
  } else {
    console.log(`"${answerOfQuestion}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
  }
};

askQuestion();
