#!/usr/bin/env node
import readlineSync from 'readline-sync';

global.questionsNumber = 3;
const maxRandomNumber = 100; // less than it and not equal

export function getUserInput(question) {
  return readlineSync.question(question);
}

export function getRandomNumber(max = maxRandomNumber, min = 1) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function getUserName() {
  console.log('Welcome to the Brain Games!');
  global.UserName = getUserInput('May I have your name? ');
  console.log(`Hello ${global.UserName}!`);
}

export function getAndCheckAnswer(question, correctAnswer) {
  let rightAnswer = false;
  console.log(`Question: ${question}`);
  const userAnswer = getUserInput('Your answer: ');
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
    rightAnswer = true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${global.UserName}!`);
  }
  return rightAnswer;
}

export function checkIfEndGame(questionNumber) {
  if (questionNumber === 0) {
    console.log(`Congratulations, ${global.UserName}!`);
  }
}

getUserName();
