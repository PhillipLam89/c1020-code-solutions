var timesClicked = 0;
var button = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

button.addEventListener('click', function () {
  timesClicked++;
  clickCount.textContent = 'Clicks: ' + timesClicked;
  if (timesClicked < 4) {
    clickCount.className = 'cold';
  } else if (timesClicked < 7) {
    clickCount.className = 'cool';
  } else if (timesClicked < 10) {
    clickCount.className = 'tepid';
  } else if (timesClicked < 13) {
    clickCount.className = 'warm';
  } else if (timesClicked < 16) {
    clickCount.className = 'hot';
  } else clickCount.className = 'nuclear';
});
