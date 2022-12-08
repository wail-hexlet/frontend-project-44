#!/usr/bin/env node
import {
  getRandomNumber, getAndCheckAnswer,
} from '../index.js';

let correctAnswer = '';

function getCalcQuestion() {
  let question = '';
  let progressionValue = getRandomNumber(20, 1);
  const progressionStep = getRandomNumber(20, 1);
  const indexOfMissingValue = getRandomNumber(9);
  for (let i = 0; i < 10; i += 1) {
    if (i === indexOfMissingValue) {
      progressionValue += progressionStep;
      correctAnswer = progressionValue.toString();
      question += ' .. ';
    } else {
      progressionValue += progressionStep;
      question += ` ${progressionValue} `;
    }
  }
  return question.trim();
}

export default function executeGame() {
  let { questionsNumber } = global;
  console.log('What number is missing in the progression?');
  while (questionsNumber > 0) {
    const question = getCalcQuestion();
    if (!getAndCheckAnswer(question, correctAnswer)) { break; }
    questionsNumber -= 1;
    if (questionsNumber === 0) {
      console.log(`Congratulations, ${global.UserName}!`);
    }
  }
}
