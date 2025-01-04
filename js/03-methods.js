const allUsers = ['Elva Harper', 'Lily Wilkins', 'Derek Medina', 'Derek Medina'];
const allUsersStr = allUsers.join(', ');

console.log(allUsers);
console.log(allUsersStr);

const phoneNumbersStr = '+380663792294,+380503980173,+380509838422';
const phoneNumbersArr = phoneNumbersStr.split(',');

console.log(phoneNumbersStr);
console.log(phoneNumbersArr);

// const allUsers = ['Elva Harper', 'Lily Wilkins', 'Derek Medina', 'Charlie Boyd', 'Jon Rowe'];
// const allUsersCopy = allUsers.slice(2, 3);

console.log(allUsers);
console.log(allUsersCopy);

allUsersCopy[0] = 'Noah Brady';

console.log(allUsers);
console.log(allUsersCopy);

const oldCourses = ['HTML', 'CSS', 'JavaScript'];
const newCourses = ['React', 'NodeJS'];
const allCoruses = newCourses.concat(oldCourses);

console.log(allCoruses);

allCoruses.push('Angular');
allCoruses.pop();
allCoruses.pop();

allCoruses.unshift('Angular');
allCoruses.shift();
allCoruses.shift();

console.log(allCoruses);
