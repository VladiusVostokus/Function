'use strict';


const methods = (iface) => {
  const res = [];
  for (const field in iface) {
    const fn = iface[field];
    if (typeof fn === 'function') {
      res.push([field, fn.length]);
    }
  }
  return res;
};

module.exports = { methods };
