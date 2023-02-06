'use strict';

const ipToInt = (ip = '165.225.133.150') => {
  const fn = (res, item) => (res << 8) + parseInt(item);
  return ip.split('.').reduce(fn,0);
};


module.exports = { ipToInt };
