#!/usr/bin/env node
import {
  getRandomNumber, getAndCheckAnswer,
} from '../index.js';

function getCorrectAnswer(question) {
  if (question === 1) {
    return 'no';
  }
  if (question === 2) {
    return 'yes';
  }
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

export default function executeGame() {
  let { questionsNumber } = global;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (questionsNumber > 0) {
    const question = getRandomNumber();
    const correctAnswer = getCorrectAnswer(question);
    if (!getAndCheckAnswer(question, correctAnswer)) { break; }
    questionsNumber -= 1;
    if (questionsNumber === 0) {
      console.log(`Congratulations, ${global.UserName}!`);
    }
  }
}
