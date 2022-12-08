#!/usr/bin/env node
import {
  getRandomNumber, getAndCheckAnswer,
} from '../index.js';

function getCorrectAnswer(question) {
  let answer;
  switch (question) {
    case 1:
      answer = 'no';
      break;
    case 2:
      answer = 'yes';
      break;
    default:
      for (let x = 2; x < question; x += 1) {
        if (question % x === 0) {
          answer = 'no';
          break;
        }
      }
      answer = 'yes';
      break;
  }
  return answer;
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
