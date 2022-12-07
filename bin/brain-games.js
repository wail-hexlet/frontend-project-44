#!/usr/bin/env node
import getUserInput from '../src/cli.js';
import brainEven from './brain-even.js';

console.log('Welcome to the Brain Games!');
global.UserName = getUserInput('May I have your name? ');
console.log(`Hello ${global.UserName}!`);
brainEven();
