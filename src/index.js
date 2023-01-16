import readlineSync from 'readline-sync';
import greeiting from './cli.js';

let gameCondition;
let wins = 0;
let userAnswer;
let question;
let rightAnswer;

const gamesAlgoritm = () => {
  const userName = greeiting();
  console.log(gameCondition);
  while (wins < 3) {
    console.log(`Question: ${question}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
      wins += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}`);
      wins = 4;
    }
    if (wins === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gamesAlgoritm;
