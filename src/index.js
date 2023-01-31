import readlineSync from 'readline-sync';
import greeting from './cli.js';

// eslint-disable-next-line consistent-return
const startAlgoritm = (rules, generateRound) => {
  const userName = greeting();
  console.log(rules);
  const countWins = 3;
  for (let i = 1; i <= countWins; i += 1) {
    const [questionGame, answerGame] = generateRound(); // add individual considences of games
    console.log(`Question: ${questionGame}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (`${answerGame}` !== `${userAnswer}`) { // response user's and right answers
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answerGame}'.\nLet's try again, ${userName}!`);
    // eslint-disable-next-line no-else-return
    } else {
      console.log('Correct!');
      if (i === countWins) { // three wins in a row
        return console.log(`Congratulations, ${userName}!`);
      }
    }
  }
};

export default startAlgoritm;
