'use strict';

const random = (min = 0, max) => {
  const value = Math.random() * (max - min) + min;
  const number = Math.floor(value);
  return Math.floor(number);
};

module.exports = { random };
