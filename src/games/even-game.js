#!/usr/bin/env node
import {
  getRandomNumber, getAndCheckAnswer,
} from '../index.js';

function getCorrectAnswer(question) {
  if (question % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

export default function executeGame() {
  let { questionsNumber } = global;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
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
