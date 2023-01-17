import readlineSync from 'readline-sync';
import greeting from './cli.js';

const userName = greeting();

const gameRules = (Rules) => {
  console.log(Rules);
};

export { gameRules };

let wins = 0;

const gameCondition = (questionGame, rightAnswer) => {
  console.log(`Question: ${questionGame}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (`${rightAnswer}` === `${userAnswer}`) {
    console.log('Correct!');
    wins += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}`);
    wins = 4;
  }
  if (wins === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
  return wins;
};

export { gameCondition };
