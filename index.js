'use strict';
const program = require('commander');
const analyze = require('./lib/analyze');
const format = require('./lib/format');

program
  .usage('<file ...>')
  .parse(process.argv);

program.args.forEach((file) => analyze(file, (err, analysis) => format(analysis)));
