import _ from 'lodash';
import readlineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let i = 0;
const askQuestion = () => {
  const randomeCount = _.random(1, 99);
  if (i === 3) {
    return console.log('Congratulatin!');
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
    i += 1;
    askQuestion();
  } else {
    console.log(`"${answerOfQuestion}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
  }
};

askQuestion();