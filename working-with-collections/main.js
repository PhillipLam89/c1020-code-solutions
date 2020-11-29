/* global _ */
/* eslint-disable no-console */

const currentPlayers = [{ name: 'Phillip', hand: [] }, { name: 'Cody', hand: [] }, { name: 'Uzair', hand: [] }, { name: 'Brett', hand: [] }];
const deck = [];
const cardRanks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

startGame(currentPlayers,3) //takes into account length of currentPlayers (2-to-8 players), the 2nd parameter sets numbers of card dealt each hand, maximum is 6.


function addNewPlayer(playerName) {
  currentPlayers.push({name: playerName, hand: []})
  return `Player ${playerName} added to the Current Players' roster!`
}

function removePlayer(playerName) {
  for (let i = 0; i < currentPlayers.length; i++) {
    if (currentPlayers[i].name.toLowerCase() === playerName.toLowerCase()) {
        currentPlayers.splice(i,1)
      return `Player ${playerName} has been removed from the roster!`
    }
  }
  return `Player ${playerName} not found on current roster...`
}

   //this function checks to see if theres a tie (more than 1 max score)
function indexesOfMaxScores(arr) {
  const maxValue = Math.max(...arr);
  const maxIndexes = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === maxValue) {
      maxIndexes.push(i);
    };
  };
  return maxIndexes;
};

function startGame(arrayOfPlayers, cardsPerHand) {

  if (arrayOfPlayers.length < 2 || arrayOfPlayers.length > 8 || cardsPerHand > 6) return 'must be at least 2 players|max 8 players. 6 cards MAX per hand'
  for (let i = 0; i < arrayOfPlayers.length; i++) {
    arrayOfPlayers[i].hand = []
  }
  // the for loops below will create a proper 52 card deck without me having to type it
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
    else deck[i].points = 10
  }

  const shuffledDeck = _.shuffle(deck);
  const arr = []
  for (let i = 0; i < arrayOfPlayers.length; i++) {

    arrayOfPlayers[i].hand.push(shuffledDeck.splice(0, cardsPerHand)); //splice is used here as we need the original deck to be mutated as we draw cards
    arrayOfPlayers[i].hand = arrayOfPlayers[i].hand.flat();
    arrayOfPlayers[i].total = 0
    for (let j = 0; j < cardsPerHand; j ++ ) {
      arrayOfPlayers[i].total += arrayOfPlayers[i].hand[j].points  //adds up point values of each player's hand
    }

    arr.push(arrayOfPlayers[i].total)
  }

  const IndexOfMaxScore = arr.indexOf(Math.max(...arr))
  const maxScore = Math.max(...arr)
  const arrayOfMaxScores = indexesOfMaxScores(arr)  //returns arrays of indexes of tied high scores, these indixes will identify players with tied high scores  in the arrayOfPlayers array passed in.


  if (arrayOfMaxScores.length > 1) {

    let tieMessage = ''
    const tiedPlayers = []
    for (let i = 0; i < arrayOfMaxScores.length; i++ ) {
      tiedPlayers.push(arrayOfPlayers[arrayOfMaxScores[i]]) // [arrayOfMaxScores[i]] allows us to identify the index of the tied players
      tieMessage += `${arrayOfPlayers[arrayOfMaxScores[i]].name} `
    }
    tieMessage += `are tied with ${arr[IndexOfMaxScore]} points. A tie breaker will now run...`
    console.log(tieMessage)

    console.log(`RESULT OF TIE BREAKER: `)
    startGame(tiedPlayers, cardsPerHand)
    return
  }

  let winningHand = ''

  console.log(`The winner is ${arrayOfPlayers[IndexOfMaxScore].name.toUpperCase()}! With a total of ${arrayOfPlayers[IndexOfMaxScore].total} points. `)
  for (let val of arrayOfPlayers[IndexOfMaxScore].hand ) { //displays winning hand
    winningHand += ' |' + val.rank + ' of ' + val.suit + '|'
  }
  console.log(`Winning hand: ${winningHand}.`);
  winningHand = ''
  const participantsList = []
  for (let i = 0; i < arrayOfPlayers.length;i++) {
    participantsList.push(arrayOfPlayers[i].name)
    console.log('Hand Dealt:', arrayOfPlayers[i].name , arrayOfPlayers[i].hand)
    // arrayOfPlayers[i].hand = [] //clears all hands
  }
  console.log(`Final Round Participants: ${participantsList.join(', ')}`)
  console.log(`All players' hands have been resetted`)
  console.log(`Create a new player by typing addNewPlayer(playerNameHere), or delete a player with removePlayer(playerNameHere) then/or start a new game by typing startGame(currentPlayers, numbersOfCardsEachHand)`)
  }
