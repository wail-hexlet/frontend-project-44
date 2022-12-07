#!/usr/bin/env node
import getUserInput from '../src/cli.js';

let questionsNumber = 3;
const maxRandomNumber = 100;

function getRandomNumber() {
  return Math.floor(Math.random() * maxRandomNumber);
}
function getCorrectAnswer(number) {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

console.log('Welcome to the Brain Games!');
global.UserName = getUserInput('May I have your name? ');
console.log(`Hello ${global.UserName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
while (questionsNumber > 0) {
  const randomNumber = getRandomNumber(0);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = getUserInput('Your answer: ');
  const correctAnswer = getCorrectAnswer(randomNumber);
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${global.UserName}!`);
    break;
  }
  questionsNumber -= 1;
  if (questionsNumber === 0) {
    console.log(`Congratulations, ${global.UserName}!`);
  }
}