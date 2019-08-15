module.exports = function xor(...args) {
  if (args.length < 2) {
    return false;
  }

  const truthyCount = args.reduce((result, val) => result + !!val, 0);
  return truthyCount === 1;
};
