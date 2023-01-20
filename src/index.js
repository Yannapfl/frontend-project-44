import readlineSync from 'readline-sync';
import greeting from './cli.js';

const userName = greeting();

const gameRules = (Rules) => { // description of game's rules
  console.log(Rules);
};

export { gameRules };

let wins = 0;
// comparing the user's answer to the correct one
const isGameCondition = (isQuestion, isRightAnswer) => {
  console.log(`Question: ${isQuestion}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (`${isRightAnswer}` === `${userAnswer}`) {
    console.log('Correct!');
    wins += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isRightAnswer}'.`);
    wins = 4;
  }
  if (wins === 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}`);
  }
  return wins;
};

export { isGameCondition };
