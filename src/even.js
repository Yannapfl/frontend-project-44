const randomEven = () => Math.floor(Math.random() * 100);

export { randomEven };

const answerEven = () => {
  let isEven;
  if (randomEven % 2 === 0) {
    isEven = 'yes';
  } else {
    isEven = 'no';
  }
  return isEven;
};

export { answerEven };
