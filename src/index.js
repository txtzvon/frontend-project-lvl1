import readlineSync from 'readline-sync';

export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let nameOfUser;
// eslint-disable-next-line import/prefer-default-export
export const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  nameOfUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfUser}!`);
};

export const levelOfGame = (question, correctAnswer) => {
  let result;
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    result = 'true';
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    result = 'false';
  }
  return result;
};

export const finalMessage = (Counter) => {
  const message = (Counter === 3) ? `Congratulations, ${nameOfUser}!` : `Let's try again, ${nameOfUser}!`;
  console.log(message);
};
