const filterByYear = (arr, year) => {
  return arr.filter((el) => el.date.split("-")[0] === year);
};

const filterById = (arr, id) => {
  return arr.filter((el) => el.expenseId !== id);
};

const getRandomNum = () => {
  const randomNum = Math.floor(Math.random() * 10);
  return randomNum;
};
const generateId = () => {
  let randomNum = getRandomNum();
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  const randomLetter = letters[randomNum];
  randomNum = getRandomNum();
  const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", "?"];
  const randomSymbol = symbols[randomNum];
  randomNum = getRandomNum();
  const randomId = +randomNum + randomLetter + randomSymbol;

  return randomId;
};

export { filterByYear, generateId, filterById };
