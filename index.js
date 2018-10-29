const chalk = require('chalk');
const cl = console.log;

const w = chalk.white.bgBlack;
const b = chalk.blue.bold;
const r = chalk.red.bold.underline;
const g = chalk.green.bold;
const y = chalk.yellow.bold;
 
cl(w(y('\nMack') + ' and ' + g('Bill') + ' went to the store\n' + 
    'To grab a ' + b('jug of water\n') +
    '\nBut ' + y('Mack') + w(' went down to the ' + r('beer aisle\n') + 
    'And ' + g('Bill') + ' soon followed after\n' +
    g('\nBill') + '  was livid upon seeing ' + y('Mack') + '\n' + 
    'With his hands full of ' + r('booze\n') +
    '\nA playful ' + y('Mack') + ' pretended not to notice\n' + 
    'And ' + g('Bill') + ' was ' + r('not amused\n'))));
