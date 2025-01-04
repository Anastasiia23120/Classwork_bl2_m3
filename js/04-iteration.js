const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.log('friends:', friends);

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

for (const el of friends) {
  console.log(el);
}

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍎', '🍋'];

console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(`${i + 1}: ${fruits[i]}`);
}
