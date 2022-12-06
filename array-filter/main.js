const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

function evenNumber(num) {
  return (num % 2 === 0);
}
const evenNumbers = numbers.filter(evenNumber);
console.log('evenNumbers:', evenNumbers);

function greaterThanFive(num) {
  return (num > 5);
}
const overFive = numbers.filter(greaterThanFive);
console.log('overFive:', overFive);

function startingE(name) {
  if (name[0] === 'E') {
    return name;
  }
}
const startWithE = names.filter(startingE);
console.log('startWithE:', startWithE);

function hasD(name) {
  if ((name.includes('d')) || (name.includes('D'))) {
    return name;
  }
}
const haveD = names.filter(hasD);
console.log('haveD:', haveD);
