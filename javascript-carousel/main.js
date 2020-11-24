const $img = document.querySelector('img');
const imagesArr = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
let count = 0;
const $circularButtons = document.querySelectorAll('.dot');
let carousel = setInterval(displayHelper, 3000)

function displayHelper() {
  count < imagesArr.length-1 ? count++ : count = 0
  $img.setAttribute('src', imagesArr[count]);
  for (let i = 0; i < $circularButtons.length; i++) {
    i === count ? $circularButtons[i].className = 'filled fas fa-circle' : $circularButtons[i].className = 'empty far fa-circle'
  }
}

document.addEventListener('click', function(event){
  if (event.target.className === 'fas fa-chevron-right right-arrow') {
    clearInterval(carousel)
    $circularButtons[count].className = 'empty far fa-circle'
    count < imagesArr.length - 1 ? count++ : count = 0
    $img.setAttribute('src', imagesArr[count]);
    $circularButtons[count].className = 'filled fas fa-circle'
    carousel = setInterval(displayHelper, 3000)
  }
  else if (event.target.className === 'fas fa-chevron-left left-arrow') {
    clearInterval(carousel)
    $circularButtons[count].className = 'empty far fa-circle'
    count--
    count < 0 ? count = imagesArr.length - 1 : count = count
    $img.setAttribute('src', imagesArr[count]);
    $circularButtons[count].className = 'filled fas fa-circle'
    carousel = setInterval(displayHelper, 3000)
  }
  else if (event.target.className === 'filled fas fa-circle' || event.target.className === 'empty far fa-circle' ) {
    clearInterval(carousel);
    for (let j = 0; j < $circularButtons.length; j++) {
      $circularButtons[j].setAttribute('class', 'empty far fa-circle');
    }
    event.target.className = 'filled fas fa-circle';
    let selectedLocationIndex = null;
    for (let k = 0; k < $circularButtons.length; k++) {
      if ($circularButtons[k].className === 'filled fas fa-circle') {
        selectedLocationIndex = k; // this will give location of which circle the user clicked
      }
    }
    count = selectedLocationIndex
    $img.setAttribute('src', imagesArr[selectedLocationIndex]);
    carousel = setInterval(displayHelper, 3000)
  }
})
