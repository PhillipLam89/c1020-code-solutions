
var selectButton = document.querySelector('.lights-on');
var container = document.querySelector('.container');

selectButton.addEventListener('click', function () {

  if (selectButton.className === 'lights-on') {
    selectButton.className = 'lights-off';
    container.className = 'container-off';
  } else if (selectButton.className === 'lights-off') {
    selectButton.className = 'lights-on';
    container.className = 'container';
  }
});
