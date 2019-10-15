const gel = element => document.querySelector(element);

const speed = 5;

document.addEventListener('keydown', (e) => {
  e.preventDefault();

  const commands = {
    key37: {
      axis: 'left',
      direction: -speed
    },
    key38: {
      axis: 'top',
      direction: -speed
    },
    key39: {
      axis: 'left',
      direction: speed
    },
    key40: {
      axis: 'top',
      direction: speed
    },
  }

  const currentAxis = commands[`key${e.keyCode}`].axis;
  const currentPosition = +(gel('#player').style[currentAxis].split('px').join(''));
  const currentDirection = commands[`key${e.keyCode}`].direction;

  gel('#player').style[currentAxis] = `${currentPosition + currentDirection}px`;
});