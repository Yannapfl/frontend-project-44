import readlineSync from 'readline-sync';
import greeiting from './cli.js';

const isEven = () => {
  const userName = greeiting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let wins = 0;
  let randomNumber;
  let userAnswer;

  while (wins < 3) {
    randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (randomNumber % 2 === 0) {
      if (userAnswer === 'yes') {
        console.log('Correct!');
        wins += 1;
      } else {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}`);
        wins = 4;
      }
    } else if (userAnswer === 'no') {
      console.log('Correct!');
      wins += 1;
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}`);
      wins = 4;
    }
  }
  if (wins === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default isEven;
