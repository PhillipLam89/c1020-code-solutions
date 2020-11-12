var $phrase = document.querySelectorAll('span');
var counter = 0;
var wrongCount = 0;
var underlinePosition = 1;
var $result = document.querySelector('.result');
var $wrong = document.querySelector('.wrong-count');
var $percent = document.querySelector('.percentage');
var $container = document.querySelector('.container');
var $done = document.querySelector('.invisible');

document.querySelector('html').addEventListener('keydown', function (e) {
  if (e.key === $phrase[counter].textContent && counter < 30 && underlinePosition <= 29) {
    $phrase[counter].className = 'green';
    $phrase[underlinePosition].className = 'has-underline';
    counter++;
    underlinePosition++;
    $result.textContent = 'Letters Typed Correctly: ' + counter;
  } else if (e.key !== $phrase[counter].textContent) {
    $phrase[counter].className = 'red';
    wrongCount++;
    $wrong.textContent = 'Letters Typed Wrong: ' + wrongCount;
  } else if (counter === $phrase.length - 1) { // this signals user completing the phrase
    $phrase[$phrase.length - 1].className = 'green';
    $percent.textContent = 'Your accuracy is: ' + ((counter) / (counter + wrongCount)).toFixed(2) * 100 + '%';
    $container.className = 'container-see-through';
    $done.className = 'visible';
    document.querySelector('h2').textContent = ((counter) / (counter + wrongCount)).toFixed(2) * 100 + '%! Click to play again, ALT-F4 to quit!';
  }
});

document.querySelector('.play-again').addEventListener('click', function () { // resets all things after clicking play again
  $done.className = 'invisible';
  $container.className = 'container';
  counter = 0;
  wrongCount = 0;
  underlinePosition = 1;
  $result.textContent = 'Letters Typed Correctly:';
  $wrong.textContent = 'Letters Typed Wrong: ';
  $percent.textContent = '';
  for (var i = 0; i < $phrase.length; i++) {
    $phrase[i].className = 'new-game';
  }
  $phrase[0].className = 'g'; // this will give it the border bottom after reset
});
