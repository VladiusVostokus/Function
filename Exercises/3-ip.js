'use strict';

let sum;


const ipToInt = (ip = '165.225.133.150') => {
  const mIp = ip.split('.');
  sum = mIp.reverse().reduce((acc, x2, i) => acc + (x2 << 8 * (i++)), 0);
  return sum;
};
module.exports = { ipToInt };
