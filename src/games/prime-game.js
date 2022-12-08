#!/usr/bin/env node
import {
  getRandomNumber, getAndCheckAnswer, checkIfEndGame,
} from '../index.js';

const { questionsNumber } = global;

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
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < questionsNumber; i += 1) {
    const question = getRandomNumber();
    const correctAnswer = getCorrectAnswer(question);
    if (!getAndCheckAnswer(question, correctAnswer)) { break; }
    checkIfEndGame(questionsNumber);
  }
}
