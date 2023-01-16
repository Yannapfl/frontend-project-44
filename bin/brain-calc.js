import gamesAlgoritm from '../src/index.js';
import { randomCalc, rightAnswer } from '../src/calc.js';

const calcCondition = 'What is the result of the expression?';
const questionCalc = randomCalc();
const calcAnswer = rightAnswer();

gamesAlgoritm(calcCondition, questionCalc, calcAnswer);
