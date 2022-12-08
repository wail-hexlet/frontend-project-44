#!/usr/bin/env node
import {
  getRandomNumber, getAndCheckAnswer,
} from '../index.js';

function getCalcQuestion() {
  const arr = [' + ', ' - ', ' * '];
  return getRandomNumber() + arr[getRandomNumber(2)] + getRandomNumber();
}
function getCorrectAnswer(question) {
  let answer = 0;
  const arr = question.split(' ');
  const operation = arr[1];
  switch (operation) {
    case '+':
      answer = parseInt(arr[0], 10) + parseInt(arr[2], 10);
      break;
    case '-':
      answer = parseInt(arr[0], 10) - parseInt(arr[2], 10);
      break;
    case '*':
      answer = parseInt(arr[0], 10) * parseInt(arr[2], 10);
      break;
    default:
      break;
  }
  return answer.toString();
}

export default function calcGame() {
  let { questionsNumber } = global;
  console.log('What is the result of the expression?');
  while (questionsNumber > 0) {
    const question = getCalcQuestion();
    const correctAnswer = getCorrectAnswer(question);
    if (!getAndCheckAnswer(question, correctAnswer)) { break; }
    questionsNumber -= 1;
    if (questionsNumber === 0) {
      console.log(`Congratulations, ${global.UserName}!`);
    }
  }
}
