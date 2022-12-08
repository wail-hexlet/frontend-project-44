#!/usr/bin/env node
import {
  getRandomNumber, getAndCheckAnswer,
} from '../index.js';

const { questionsNumber } = global;

function getCorrectPrimeAnswer(question) {
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

export default function executePrime() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < questionsNumber; i += 1) {
    const questionPrime = getRandomNumber();
    if (!getAndCheckAnswer(questionPrime, getCorrectPrimeAnswer(questionPrime), i)) {
      break;
    }
  }
}
