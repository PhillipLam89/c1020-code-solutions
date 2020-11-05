var $img = document.querySelector('img');
var imagesArr = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var count = 1;
var $circularButtons = document.querySelectorAll('.dot');
var circleCounter = 0;

var carousel = setInterval(function () {
  $img.setAttribute('src', imagesArr[count]);
  $circularButtons[count].setAttribute('class', 'fas fa-circle'); // filled
  $circularButtons[circleCounter].setAttribute('class', 'far fa-circle dot'); // empty

  circleCounter++;
  if (circleCounter === 5) {
    circleCounter = 0;
  }
  count++;
  if (count === 5) {
    count = 0;
  }
}, 2000);

document.addEventListener('click', function (event) {
  if (event.target.className === 'fas fa-chevron-right right-arrow') {
    clearInterval(carousel);
    circleCounter++;
    $img.setAttribute('src', imagesArr[count]);
    $circularButtons[count].setAttribute('class', 'fas fa-circle');

    $circularButtons[circleCounter - 1].setAttribute('class', 'far fa-circle dot');
    count++;
    if (count === 5) {
      count = 0;
    }
    if (circleCounter === 5) {
      circleCounter = 0;
    }
    carousel = setInterval(function () {
      $img.setAttribute('src', imagesArr[count]);
      $circularButtons[count].setAttribute('class', 'fas fa-circle'); // filled
      $circularButtons[circleCounter].setAttribute('class', 'far fa-circle dot'); // empty

      circleCounter++;
      if (circleCounter === 5) {
        circleCounter = 0;
      }
      count++;
      if (count === 5) {
        count = 0;
      }
    }, 2000);
  }

  if (event.target.className === 'fas fa-chevron-left left-arrow') {
    clearInterval(carousel);
    circleCounter--;
    count--;
    if (circleCounter < 0) {
      circleCounter = 4;
    }
    if (count < 0) {
      count = 4;
    }
    $circularButtons[circleCounter].setAttribute('class', 'fas fa-circle dot'); // filled
    $circularButtons[count].setAttribute('class', 'far fa-circle dot'); // empty
    $img.setAttribute('src', imagesArr[circleCounter]);

    carousel = setInterval(function () {
      $img.setAttribute('src', imagesArr[count]);
      $circularButtons[count].setAttribute('class', 'fas fa-circle'); // filled
      $circularButtons[circleCounter].setAttribute('class', 'far fa-circle dot'); // empty

      circleCounter++;
      if (circleCounter === 5) {
        circleCounter = 0;
      }
      count++;
      if (count === 5) {
        count = 0;
      }
    }, 2000);
  }

  if (event.target.className === 'far fa-circle dot') {
    clearInterval(carousel);
    for (var i = 0; i < $circularButtons.length; i++) {
      $circularButtons[i].setAttribute('class', 'far fa-circle dot');
    }
    event.target.setAttribute('class', 'fas fa-circle');

  }
});

// document.querySelector('.circular-buttons').addEventListener('click', function(event){
//   if (event.target.className === 'far fa-circle dot') {

//   }
// })
