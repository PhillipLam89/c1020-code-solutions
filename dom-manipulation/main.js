var timesClicked = 0;
var button = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

button.addEventListener('click', function () {
  timesClicked++;
  clickCount.textContent = 'Clicks: ' + timesClicked;
  if (timesClicked < 4) {
    button.className = 'hot-button cold';
  } else if (timesClicked < 7) {
    button.className = 'hot-button cool';
  } else if (timesClicked < 10) {
    button.className = 'hot-button tepid';
  } else if (timesClicked < 13) {
    button.className = 'hot-button warm';
  } else if (timesClicked < 16) {
    button.className = 'hot-button hot';
  } else button.className = 'hot-button nuclear';
});
