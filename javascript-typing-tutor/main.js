var $phrase = document.querySelectorAll('span');
var counter = 0;
var wrongCount = 0;
var $result = document.querySelector('.result');
var $wrong = document.querySelector('.wrong-count');

document.querySelector('html').addEventListener('keydown', function (e) {
  if (e.key === $phrase[counter].textContent) {
    $phrase[counter].className = 'green';
    $phrase[counter + 1].className = 'has-underline';
    counter++;
    $result.textContent = 'Letters Typed Correctly: ' + counter;
  } else if (e.key !== $phrase[counter].textContent) {
    $phrase[counter].className = 'red';
    wrongCount++;
    $wrong.textContent = 'Letters Typed Wrong: ' + wrongCount;
  }
});
