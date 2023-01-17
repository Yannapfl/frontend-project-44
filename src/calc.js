const randomAction = Math.floor(Math.random() * 3) + 1;
const a = Math.floor(Math.random() * 100);
const b = Math.floor(Math.random() * 100);

const randomCalc = () => {
  switch (randomAction) {
    case 1:
      return `${a} + ${b}`;
    case 2:
      return `${a} - ${b}`;
    default:
      return `${a} * ${b}`;
  }
};
export { randomCalc };

const answerCalc = () => {
  switch (randomAction) {
    case 1:
      return (a + b);
    case 2:
      return (a - b);
    default:
      return (a * b);
  }
};

export { answerCalc };
