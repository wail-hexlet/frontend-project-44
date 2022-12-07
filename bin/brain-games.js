#!/usr/bin/env node
import getUserInput from '../src/cli.js';

console.log('Welcome to the Brain Games!');
console.log(`Hello ${getUserInput('May I have your name? ')}!`);