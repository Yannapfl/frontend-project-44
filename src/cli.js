#!/usr/bin/env node
import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');

export { userName };