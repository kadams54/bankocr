#!/usr/bin/env node
'use strict';

const program = require('commander');
const app = require('./app');

program.version('1.0.0').arguments('<file>').parse(process.argv);

if (program.args.length === 0) program.help();

const accounts = app.run(program.args[0]);
console.log(`Performed OCR on ${accounts.length} accounts.`);
accounts.forEach(account => console.log(`${account}`));
