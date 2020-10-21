var $phrase = document.querySelectorAll('span');
var counter = 0;
var wrongCount = 0;
var underlinePosition = 1;
var $result = document.querySelector('.result');
var $wrong = document.querySelector('.wrong-count');
var $percent = document.querySelector('.percentage');

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
  } else if (counter === $phrase.length - 1) {
    $phrase[29].className = 'green';
    $percent.textContent = 'Your accuracy is: ' + ((counter) / (counter + wrongCount)).toFixed(2) * 100 + '%';
  }
});
