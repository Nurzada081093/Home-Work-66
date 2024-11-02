export const mealsTime = [
  {name: 'Breakfast', id: 'breakfast'},
  {name: 'Snack', id: 'snack'},
  {name: 'Lunch', id: 'lunch'},
  {name: 'Dinner', id: 'dinner'},
];

export const wordTransform = (wd: string) => {
  const firstLetter = wd.charAt(0);
  const firstLetterUpper = firstLetter.toUpperCase();
  const lastLetterWord = wd.slice(1);
  return firstLetterUpper + lastLetterWord;
};





