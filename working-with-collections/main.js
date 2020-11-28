/* global _ */
/* eslint-disable no-console */

const players = [{ name: 'Phillip', hand: [] }, { name: 'Cody', hand: [] }, { name: 'Uzair', hand: [] }, { name: 'Brett', hand: [] }];
const deck = [];
const cardRanks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

for (const val of cardRanks) {
  deck.push({ rank: val }, { rank: val }, { rank: val }, { rank: val });
}
for (let i = 0; i < deck.length; i = i + 4) {
  deck[i].suit = 'clubs';
}
for (let i = 1; i < deck.length; i = i + 4) {
  deck[i].suit = 'diamonds';
}
for (let i = 2; i < deck.length; i = i + 4) {
  deck[i].suit = 'hearts';
}
for (let i = 3; i < deck.length; i = i + 4) {
  deck[i].suit = 'spades';
}
for (let i = 0; i < deck.length; i++) {
  if (deck[i].rank === 'A') deck[i].points = 11;
  else if (deck[i].rank === '2') deck[i].points = 2;
  else if (deck[i].rank === '3') deck[i].points = 3;
  else if (deck[i].rank === '4') deck[i].points = 4;
  else if (deck[i].rank === '5') deck[i].points = 5;
  else if (deck[i].rank === '6') deck[i].points = 6;
  else if (deck[i].rank === '7') deck[i].points = 7;
  else if (deck[i].rank === '8') deck[i].points = 8;
  else if (deck[i].rank === '9') deck[i].points = 9;
  else if (deck[i].rank === '10' || deck[i].rank === 'J' || deck[i].rank === 'Q' || deck[i].rank === 'K') deck[i].points = 10;
}

const shuffledDeck = _.shuffle(deck);
let player1Points = 0;
let player2Points = 0;
let player3Points = 0;
let player4Points = 0;

for (let i = 0; i < players.length; i++) {
  players[i].hand.push(_.pullAt(shuffledDeck, [0, 1]));
  players[i].hand = players[i].hand.flat();
}
player1Points = players[0].hand[0].points + players[0].hand[1].points;
player2Points = players[1].hand[0].points + players[1].hand[1].points;
player3Points = players[2].hand[0].points + players[2].hand[1].points;
player4Points = players[3].hand[0].points + players[3].hand[1].points;
const pointsCollection = [player1Points, player2Points, player3Points, player4Points];
const gameWinnerIndex = pointsCollection.indexOf(Math.max(...pointsCollection));
console.log(`Player ${gameWinnerIndex + 1}, ${players[gameWinnerIndex].name} is the winner with a total of ${pointsCollection[gameWinnerIndex]} points! beating ${players.length - 1} other players with a ${players[gameWinnerIndex].hand[0].rank} of ${players[gameWinnerIndex].hand[0].suit} and a ${players[gameWinnerIndex].hand[1].rank} of ${players[gameWinnerIndex].hand[1].suit}.`);
