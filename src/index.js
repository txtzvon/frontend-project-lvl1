import readlineSync from 'readline-sync';

export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line consistent-return
export const engine = (instruction, round) => {
  console.log('Welcome to the Brain Games!');
  const nameOfUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfUser}!`);
  console.log(instruction);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = round();
    console.log(`Question: ${question}`);
    const answerOfUser = readlineSync.question('Your answer: ');
    if (answerOfUser !== correctAnswer) {
      return console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${nameOfUser}!`);
};
