import readlineSync from 'readline-sync';

const getName = () => {
  console.log('Welcome to the Brain Games!');
  const nameOfUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfUser}!`);
};
export default getName;
