export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min - 1)) + min;

export const isEven = (num) => num % 2 === 0;

export const countingWithRandomeSign = (sing, x, y) => {
  switch (sing) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;

    default:
      throw new Error(`Unknown order state: '${sing}'!`);
  }
};

export const getRandomSing = () => {
  const sings = ['+', '-', '*'];
  return sings[getRandomNumber(0, 2)];
};

export const searchDivider = (x, y) => {
  let secondDiv = y;
  let firstDiv = x;
  while (secondDiv) {
    const t = secondDiv;
    secondDiv = firstDiv % secondDiv;
    firstDiv = t;
  }
  return firstDiv;
};

export const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const searchOfMissingElement = (collection, step, lastElement) => {
  const newArr = collection.split(' ');
  const result = lastElement - (step * (newArr.length - newArr.indexOf('..') - 1));
  return result;
};

export const formatingProgressionWithMissingElement = () => {
  const progression = [];
  let firstNum = getRandomNumber(1, 9);
  const stepOfProgression = getRandomNumber(1, 15);
  for (let i = 0; i < 10; i += 1) {
    firstNum += stepOfProgression;
    progression.push(firstNum);
  }
  progression[getRandomNumber(0, 9)] = '..';
  const randomProgression = progression.join(' ');
  return [firstNum, stepOfProgression, randomProgression];
};
