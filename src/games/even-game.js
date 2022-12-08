#!/usr/bin/env node
import {
  getRandomNumber, getAndCheckAnswer,
} from '../index.js';

function getCorrectEvenAnswer(question) {
  if (question % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

export default function executeEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < global.questionsNumber; i += 1) {
    const questionEven = getRandomNumber();
    if (!getAndCheckAnswer(questionEven, getCorrectEvenAnswer(questionEven), i)) {
      break;
    }
  }
}
