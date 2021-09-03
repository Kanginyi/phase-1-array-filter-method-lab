//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (array, string) => {
    return array.filter(element => element.toLowerCase() === string.toLowerCase());
}

const fuzzyMatch = (array, string) => {
  return array.filter(element => element.charAt(0) === string.charAt(0));
}

const matchName = (array, string) => {
  return array.filter(element => element.name === string);
}