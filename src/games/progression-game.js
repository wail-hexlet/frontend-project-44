#!/usr/bin/env node
import {
  getRandomNumber, getAndCheckAnswer, checkIfEndGame,
} from '../index.js';

const { questionsNumber } = global;

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
  console.log('What number is missing in the progression?');
  for (let i = 0; i < questionsNumber; i += 1) {
    if (!getAndCheckAnswer(getCalcQuestion(), correctAnswer)) { break; }
    checkIfEndGame(questionsNumber);
  }
}
