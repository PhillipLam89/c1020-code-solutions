/* global _ */
/* eslint-disable no-console */

const currentPlayers = [{ name: 'Phillip', hand: [] }, { name: 'Cody', hand: [] }, { name: 'Uzair', hand: [] }, { name: 'Brett', hand: [] }, { name: 'Tim D', hand: [] }];
let deck = [];
const cardRanks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const cardSuits = ['clubs','diamonds','hearts','spades']

startGame(currentPlayers, 5) //takes into account length of currentPlayers (2-to-9 players), the 2nd parameter sets numbers of card dealt each hand, maximum is 5.


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
}

function startGame(arrayOfPlayers, cardsPerHand) {
  if (arrayOfPlayers.length < 2 || arrayOfPlayers.length > 9 || cardsPerHand > 5 || cardsPerHand < 2) return console.log('There must be at least 2-8 players, each with 2-5 cards MAX per hand')
  deck = []
  for (let i = 0; i < arrayOfPlayers.length; i++) {
    arrayOfPlayers[i].hand = []
  }
  // the for loops below will create a proper 52 card deck without me having to type it
  for (let i = 0; i< cardRanks.length; i++) {
      for (let j = 0; j < cardSuits.length; j++) {
        deck.push({rank: cardRanks[i], suit : cardSuits[j]})
      }
  }

  for (let i = 0; i < deck.length; i++) {
    if (deck[i].rank === 'A') deck[i].points = 11;
    else if (deck[i].rank === '10' || deck[i].rank === 'J' || deck[i].rank === 'Q' || deck[i].rank === 'K' ) deck[i].points = 10;
    else deck[i].points = Number(deck[i].rank)
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

  const indexOfMaxScore = arr.indexOf(Math.max(...arr))
  const arrayOfMaxScores = indexesOfMaxScores(arr)  //returns arrays of indexes of tied high scores, these indixes will identify players with tied high scores  in the arrayOfPlayers array passed in.

  if (arrayOfMaxScores.length > 1) {

    let tieMessage = `WHOA THERES ${arrayOfMaxScores.length} PLAYERS TIED FOR FIRST PLACE: <br>
    `
    const tiedPlayers = []
    for (let i = 0; i < arrayOfMaxScores.length; i++ ) {
      tiedPlayers.push(arrayOfPlayers[arrayOfMaxScores[i]]) // [arrayOfMaxScores[i]] allows us to identify the index of the tied players
      tieMessage += `
        <span class="tied-name"> ${arrayOfPlayers[arrayOfMaxScores[i]].name.toUpperCase()}'s HAND (tied) </span>: <br>
        `
      for (let j = 0; j < cardsPerHand; j++ ) {
        tieMessage += `|${arrayOfPlayers[arrayOfMaxScores[i]].hand[j].rank} of ${arrayOfPlayers[arrayOfMaxScores[i]].hand[j].suit}|<br>
        `
      }
    }
    tieMessage += `
    These hands are tied with ${arr[indexOfMaxScore]} points each. <br><br> A tie breaker will now run...`

    console.log(`RESULT OF TIE BREAKER: `)
    startGame(tiedPlayers, cardsPerHand)
    document.querySelector('#tied').innerHTML = '<h2> ' + tieMessage
    return
  }
  let winningHand = ''

  document.querySelector('#winner').innerHTML =  ` <h1> The winner is <span class="winner-name"> ${arrayOfPlayers[indexOfMaxScore].name.toUpperCase()}</span>! With a total of ${arrayOfPlayers[indexOfMaxScore].total} points. `
  for (let val of arrayOfPlayers[indexOfMaxScore].hand ) { //displays winning hand
    winningHand += ' |' + val.rank + ' of ' + val.suit + '|'
  }
  console.log(`Winning hand: ${winningHand}.`);
  winningHand = ''
  const participantsList = []
  let displayAllHands = ''
  for (let i = 0; i < arrayOfPlayers.length;i++) {
    participantsList.push(arrayOfPlayers[i].name)
    displayAllHands += `
    <span class="players-hand"> ${arrayOfPlayers[i].name}'s HAND (final): <br></span>
    `

    for (let j = 0; j < arrayOfPlayers[i].hand.length; j++) {
      displayAllHands += ` |${arrayOfPlayers[i].hand[j].rank} of ${arrayOfPlayers[i].hand[j].suit}| <br>
      `
    }

  }
  document.querySelector('#results').innerHTML = '<h2> ' + displayAllHands
  console.log(displayAllHands)
  console.log(`Final Round Participants: ${participantsList.join(', ')}`)
  console.log(`All players' hands have been resetted`)
  console.log(`Create a new player by typing addNewPlayer(playerNameHere), or delete a player with removePlayer(playerNameHere) then/or start a new game by typing startGame(currentPlayers, numbersOfCardsEachHand)`)
}
