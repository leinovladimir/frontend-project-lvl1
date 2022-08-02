#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

greetings();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
