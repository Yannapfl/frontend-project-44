import { gameRules, gameCondition } from '../src/index.js';
import { randomEven, answerEven } from '../src/even.js';

const Rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const questionEven = randomEven();
const rightAnswerEven = answerEven();

gameRules(Rules);

let winsCounter = 0;
while (winsCounter < 3) {
  winsCounter = gameCondition(questionEven, rightAnswerEven);
}
