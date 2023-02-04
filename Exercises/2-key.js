'use strict';
const res = [];

const generateKey = (length, possible) => {
  const max = possible.length - 1;
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * max);
    res[i] = possible[index];
  }
  return res.join('');
};

module.exports = { generateKey };
