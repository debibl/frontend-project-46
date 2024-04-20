#!/usr/bin/env node
import { program } from 'commander';

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2, cmd) => {
    console.log('filepath1:', filepath1);
    console.log('filepath2:', filepath2);
    console.log('format:', cmd.format || 'default');
  })
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}