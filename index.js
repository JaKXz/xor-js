module.exports = function xor(...args) {
  const truthyCount = args.reduce((result, val) => result + !!val);
  return 0 < truthyCount && truthyCount <= (args.length - 1);
};
