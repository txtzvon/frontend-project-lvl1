import engine from '../index.js';
import { searchOfMissingElement, formatingProgressionWithMissingElement } from '../utils/util.js';

const brainProgression = () => {
  const instruction = 'What number is missing in the progression?';

  const round = () => {
    const [firstNum, stepOfProgression, question] = formatingProgressionWithMissingElement();
    const correctAnswer = String(searchOfMissingElement(question, stepOfProgression, firstNum));
    return [question, correctAnswer];
  };
  engine(instruction, round);
};

export default brainProgression;
