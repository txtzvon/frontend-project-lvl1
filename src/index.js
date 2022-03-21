import readlineSync from 'readline-sync';

const engine = (instruction, round) => {
  console.log('Welcome to the Brain Games!');
  const nameOfUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfUser}!`);
  console.log(instruction);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = round();
    console.log(`Question: ${question}`);
    const answerOfUser = readlineSync.question('Your answer: ');
    if (answerOfUser !== correctAnswer) {
      return console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${nameOfUser}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${nameOfUser}!`);
};

export default engine;
