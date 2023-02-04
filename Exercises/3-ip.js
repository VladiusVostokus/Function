'use strict';

let sum = 0;
let i;

const ipToInt = (ip = '127.0.0.1') => {
  const modIp = ip.split('.');
  i = modIp.length - 1;
  for (const elem of modIp) {
    sum += Number(elem) << (8 * i);
    i--;
  }
  console.log(sum);
};

ipToInt();

//module.exports = { ipToInt };
