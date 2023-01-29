import startAlgoritm from '../index.js';

// generate a random number for question
const generateRandomNumber = (number) => Math.floor(Math.random() * number);
export { generateRandomNumber };

// generate right answer
const countRightAnswerEven = (randomNumber) => {
  let rightAnswerEven;
  if (randomNumber % 2 === 0) {
    rightAnswerEven = 'yes';
  } else {
    rightAnswerEven = 'no';
  }
  return rightAnswerEven;
};

const generateConsidences = () => {
  const considences = [];
  considences[0] = generateRandomNumber(100);
  considences[1] = countRightAnswerEven(considences[0]);
  return considences;
};

// add individual conditions for the Calculator
const Rules = 'Answer "yes" if the number is even, otherwise answer "no".';

// connect variables and functions with index.js
const isEven = () => {
  startAlgoritm(Rules, generateConsidences);
};

export default isEven;
