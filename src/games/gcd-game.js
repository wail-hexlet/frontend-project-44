#!/usr/bin/env node
import {
  getRandomNumber, getAndCheckAnswer,
} from '../index.js';

function getCalcQuestion() {
  return `${getRandomNumber()} ${getRandomNumber()} `;
}

function calculateNOD(left, right) {
  if (right > 0) {
    const k = left % right;
    return calculateNOD(right, k);
  }
  return Math.abs(left);
}

function getCorrectAnswer(question) {
  let answer = 0;
  const arr = question.split(' ');
  const leftInt = parseInt(arr[0], 10);
  const rightInt = parseInt(arr[1], 10);
  answer = calculateNOD(leftInt, rightInt);
  return answer.toString();
}

export default function executeGame() {
  let { questionsNumber } = global;
  console.log('Find the greatest common divisor of given numbers.');
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
