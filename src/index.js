import readlineSync from 'readline-sync';
import greeting from './cli.js';

const userName = greeting();

const startAlgoritm = (rules, generateConsidences) => {
  console.log(rules);
  let wins = 0;
  while (wins < 3) { // start a loop
    const [questionGame, answerGame] = generateConsidences(); // add considences
    console.log(`Question: ${questionGame}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (`${answerGame}` === `${userAnswer}`) { // response user's and right answers
      console.log('Correct!');
      wins += 1;
      if (wins === 3) { // three wins in a row
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      wins = 4; // losing game
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answerGame}'.\nLet's try again, ${userName}!`);
      return wins;
    }
  }
  return wins;
};

export default startAlgoritm;
