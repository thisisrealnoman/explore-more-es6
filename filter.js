const players = [72, 55, 65, 75, 62, 54];
// const selected = players.filter(player => player > 70);
// const selected = players.filter(player => player > 80);
// const selected = players.filter(player => player > 60);
const selected = players.filter(player => player % 2 === 1);
console.log(selected);

const friends = ["lex", "rolex", "watchy", "mickelz", "weekly"];
const oddFriends = friends.filter(friend => friend.length % 2 === 1);
const friendsAbove3 = friends.filter(friend => friend.length > 3);
console.log(oddFriends);
console.log(friendsAbove3);