var $phrase = document.querySelectorAll('span');
var counter = 0;
var wrongCount = 0;
var $result = document.querySelector('h1');
document.querySelector('html').addEventListener('keydown', function (e) {
  if (e.key === $phrase[counter].textContent) {
    $phrase[counter].className = 'green has-underline';
    // $phrase[counter+1].className = ''
    counter++;
  }
  if (counter === 30) {
    $result.innerHTML = 'YOUR TYPING ACCURACY IS: ' + (100 * (counter / (counter + wrongCount))).toFixed(2) + '%';
    counter = -1;
    return true;
  } else {
    $phrase[counter].className = 'red';
    $phrase[counter].className = 'umpyuiuuuuured has-underline';
    wrongCount++;
  }

});
