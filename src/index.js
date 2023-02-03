import readlineSync from 'readline-sync';
import greeting from './cli.js';

const startEngine = (description, generateRound) => {
  const userName = greeting();
  console.log(description);
  const countWins = 3;
  for (let i = 1; i <= countWins; i += 1) {
    const [questionGame, answerGame] = generateRound();
    console.log(`Question: ${questionGame}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answerGame !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answerGame}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startEngine;
