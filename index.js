const dodger = document.getElementById('dodger');
const game = document.getElementById('game');

function parsePx(style) {
  const sizeNumbers = style.replace("px", "");
  return parseInt(sizeNumbers);
}

function appendPx(num) {
  return `${num}px`;
}

function extractStyle(element, style) {
  const computedStyle = window.getComputedStyle(element);
  const number = parsePx(computedStyle.getPropertyValue(style));
  return number;
}

function dodgerLeft() {
  const left = parsePx(dodger.style.left);
  return left;
}

function dodgerBottom() {
  const bottom = parsePx(dodger.style.bottom);
  return bottom;
}

function dodgerWidth() {
  let width = extractStyle(dodger, 'width');
  if (isNaN(width)) {
    width = 40;
  }
  return width;
}

function dodgerHeight() {
  let height = extractStyle(dodger, 'height');
  if (isNaN(height)) {
    height = 20;
  }
  return height;
}

function gameRightBorder() {
  let right = extractStyle(game, 'width');
  if (isNaN(right)) {
    right = 400;
    console.log("Assigned Right Border")
  }
  return right;
}

function gameTopBorder() {
  let top = extractStyle(game, 'height');
  if (isNaN(top)) {
    top = 400;
  }
  return top;
}

function moveDodgerLeft() {
  const left = dodgerLeft();
  if(left > 0) {
    dodger.style.left = appendPx(left - 1);
    console.log("Left move succeeded!");
  }
}

function moveDodgerRight() {
  const left = dodgerLeft();
  const rightBorder = gameRightBorder();
  const dodgerSize = dodgerWidth();
  if(left < (rightBorder - dodgerSize)) {
    dodger.style.left = appendPx(left + 1);
  }
}

function moveDodgerDown() {
  const bottom = dodgerBottom();
  if(bottom > 0) {
    dodger.style.bottom = appendPx(bottom - 1);
  }
}

function moveDodgerUp() {
  const bottom = dodgerBottom();
  const topBorder = gameTopBorder();
  const dodgerSize = dodgerHeight();
  if(bottom < (topBorder - dodgerSize)) {
    dodger.style.bottom = appendPx(bottom + 1);
  }
}

function keyListener(e) {
  if(e.key == "ArrowLeft") {
    moveDodgerLeft();
  } else if(e.key == "ArrowRight") {
    moveDodgerRight();
  } else if(e.key == "ArrowDown") {
    moveDodgerDown();
  } else if(e.key == "ArrowUp") {
    moveDodgerUp();
  }
}

document.addEventListener('keydown', keyListener);