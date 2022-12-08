#!/usr/bin/env node
import {
  getRandomNumber, getAndCheckAnswer, checkIfEndGame,
} from '../index.js';

const { questionsNumber } = global;

function getCorrectAnswer(question) {
  if (question % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

export default function executeGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < questionsNumber; i += 1) {
    const questionEven = getRandomNumber();
    if (!getAndCheckAnswer(questionEven, getCorrectAnswer(questionEven))) { break; }
    checkIfEndGame(questionsNumber);
  }
}
