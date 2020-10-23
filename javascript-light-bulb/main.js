
var selectButton = document.querySelector('.lights-on');
var container = document.querySelector('.container');

var on = true;

selectButton.addEventListener('click', function () {
  if (on) {
    selectButton.className = 'lights-off';
    container.className = 'container-off';
    on = false;

  } else {
    selectButton.className = 'lights-on';
    container.className = 'container';
    on = true;
  }
});
