#!/usr/bin/env node
import {
  getRandomNumber, getAndCheckAnswer,
} from '../index.js';

const { questionsNumber } = global;

function getCalcQuestion() {
  const arr = [' + ', ' - ', ' * '];
  return getRandomNumber() + arr[getRandomNumber(2)] + getRandomNumber();
}
function getCorrectCalcAnswer(question) {
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

export default function executeCalc() {
  console.log('What is the result of the expression?');
  for (let i = 0; i < questionsNumber; i += 1) {
    const questionCalc = getCalcQuestion();
    if (!getAndCheckAnswer(questionCalc, getCorrectCalcAnswer(questionCalc), i)) {
      break;
    }
  }
}
