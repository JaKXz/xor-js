module.exports = function xor(...args) {
  if (args.length < 2) {
    return false;
  }

  const truthyCount = args.reduce((result, val) => result + !!val);
  return truthyCount === 1;
};
