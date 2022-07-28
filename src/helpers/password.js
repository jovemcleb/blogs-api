const checkPassword = (password, passwordDb) => {
  const isMatch = password === passwordDb;
  if (!isMatch) return false;
  return isMatch;
};

module.exports = {
  checkPassword,
};