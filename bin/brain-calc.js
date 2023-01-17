import { gameRules, gameCondition } from '../src/index.js';
import { randomCalc, answerCalc } from '../src/calc.js';

const Rules = 'What is the result of the expression?';
const questionCalc = randomCalc();
const rightAnswerCalc = answerCalc();

// welcome to the brain games
gameRules(Rules);

let winsCounter = 0;
while (winsCounter < 3) {
  winsCounter = gameCondition(questionCalc, rightAnswerCalc);
}
