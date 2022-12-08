#!/usr/bin/env node
import getUserInput from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = getUserInput('May I have your name? ');
console.log(`Hello ${name}!`);
