import readlineSync from 'readline-sync';

export const nameOfUser = readlineSync.question('May I have your name? ');
export const getName = () => {
  console.log(`Hello, ${nameOfUser}!`);
};
