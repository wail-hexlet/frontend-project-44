#!/usr/bin/env node
import {
  getRandomNumber, getAndCheckAnswer,
} from '../index.js';

function getGcdQuestion() {
  return `${getRandomNumber()} ${getRandomNumber()} `;
}

function calculateNOD(left, right) {
  if (right > 0) {
    const k = left % right;
    return calculateNOD(right, k);
  }
  return Math.abs(left);
}

function getCorrectGcdAnswer(question) {
  let answer = 0;
  const arr = question.split(' ');
  const leftInt = parseInt(arr[0], 10);
  const rightInt = parseInt(arr[1], 10);
  answer = calculateNOD(leftInt, rightInt);
  return answer.toString();
}

export default function executeGcd() {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < global.questionsNumber; i += 1) {
    const questionGcd = getGcdQuestion();
    if (!getAndCheckAnswer(questionGcd, getCorrectGcdAnswer(questionGcd), i)) {
      break;
    }
  }
}
