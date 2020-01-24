module.exports = delay => (
  new Promise((resolve) => setTimeout(() => resolve(true), delay))
);
