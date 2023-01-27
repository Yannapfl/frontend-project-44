const fv = 30;
const gv = 10;

const countRightAnswerGcd = (a, b) => { // generate right answer
  let maxGcd;
  if (a > b) {
    maxGcd = b;
  } else {
    maxGcd = a;
  }
  while (maxGcd > 0) {
    if ((a % maxGcd === 0) && (b % maxGcd === 0)) {
      return maxGcd;
    }
    maxGcd -= 1;
  }
  return maxGcd;
};

countRightAnswerGcd(fv, gv);
