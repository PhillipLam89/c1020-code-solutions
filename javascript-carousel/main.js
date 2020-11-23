// var $img = document.querySelector('img');
// var imagesArr = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
// var count = 0; // counts start at 1 since the default html image is index 0
// var $circularButtons = document.querySelectorAll('.dot');
// var restartCarousel = setTimeout(displayHelper, 3000)

// function displayHelper() {
//   if (count < imagesArr.length - 1) {
//     count++;
//   } else {
//     count = 0;
//   }

//   $img.setAttribute('src', imagesArr[count]);
//   for (var i = 0; i < $circularButtons.length; i++) {
//     if (i === count) { // i will always start === count since theyre both 0 initially
//       $circularButtons[i].className = 'filled fas fa-circle';
//     } else {  //all other circles thats NOT equal to count will be set to blanks. When count resets, this will also reset
//       $circularButtons[i].className = 'empty far fa-circle';
//     }
//   }
//   setTimeout(displayHelper, 3000); //setTimeout as a call back gives better results than setInterval (according to MDN)
// }

// var carousel = setInterval(function () {
//   $img.setAttribute('src', imagesArr[count]);
//   $circularButtons[count].setAttribute('class', 'fas fa-circle'); // filled
//   $circularButtons[circleCounter].setAttribute('class', 'far fa-circle dot'); // empty

//   // circleCounter++;
//   // if (circleCounter === 5) {
//   //   circleCounter = 0;
//   // }
//   count++;
//   if (count === 5) {
//     count = 0;
//   }
// }, 3000);

// document.addEventListener('click', function (event) {
//   if (event.target.className === 'fas fa-chevron-right right-arrow') {
//     clearInterval(carousel);
//     circleCounter++;
//     $img.setAttribute('src', imagesArr[count]);
//     $circularButtons[count].setAttribute('class', 'fas fa-circle');

//     $circularButtons[circleCounter - 1].setAttribute('class', 'far fa-circle dot');
//     count++;
//     if (count === 5) {
//       count = 0;
//     }
//     if (circleCounter === 5) {
//       circleCounter = 0;
//     }
//     carousel = setInterval(function () {
//       $img.setAttribute('src', imagesArr[count]);
//       $circularButtons[count].setAttribute('class', 'fas fa-circle'); // filled
//       $circularButtons[circleCounter].setAttribute('class', 'far fa-circle dot'); // empty

//       circleCounter++;
//       if (circleCounter === 5) {
//         circleCounter = 0;
//       }
//       count++;
//       if (count === 5) {
//         count = 0;
//       }
//     }, 3000);
//   }

//   if (event.target.className === 'fas fa-chevron-left left-arrow') {
//     clearInterval(carousel);
//     circleCounter--;
//     count--;
//     if (circleCounter < 0) {
//       circleCounter = 4;
//     }
//     if (count < 0) {
//       count = 4;
//     }
//     $circularButtons[circleCounter].setAttribute('class', 'fas fa-circle dot'); // filled
//     $circularButtons[count].setAttribute('class', 'far fa-circle dot'); // empty
//     $img.setAttribute('src', imagesArr[circleCounter]);

//     carousel = setInterval(function () {
//       $img.setAttribute('src', imagesArr[count]);
//       $circularButtons[count].setAttribute('class', 'fas fa-circle'); // filled
//       $circularButtons[circleCounter].setAttribute('class', 'far fa-circle dot'); // empty

//       circleCounter++;
//       if (circleCounter === 5) {
//         circleCounter = 0;
//       }
//       count++;
//       if (count === 5) {
//         count = 0;
//       }
//     }, 3000);
//   }

//   if (event.target.className === 'far fa-circle dot') {
//     clearInterval(carousel);
//     for (var i = 0; i < $circularButtons.length; i++) {
//       $circularButtons[i].setAttribute('class', 'far fa-circle dot');
//     }
//     event.target.className = 'fas fa-circle selected';
//     var selectedLocationIndex = null;
//     for (var j = 0; j < $circularButtons.length; j++) {
//       if ($circularButtons[j].className === 'fas fa-circle selected') {
//         selectedLocationIndex = j; // this will give location of which circle the user clicked
//       }
//     }
//     $img.setAttribute('src', imagesArr[selectedLocationIndex]);

//     count = selectedLocationIndex; // + 1 because indexes start at 0
//     circleCounter = selectedLocationIndex - 1;

//     carousel = setInterval(function () {
//       $img.setAttribute('src', imagesArr[count]);
//       $circularButtons[count].setAttribute('class', 'fas fa-circle'); // filled
//       $circularButtons[circleCounter].setAttribute('class', 'far fa-circle dot'); // empty
//       count++;
//       circleCounter++;
//       if (circleCounter === 5) {
//         circleCounter = 0;
//       }
//       if (count === 5) {
//         count = 0;
//       }
//     }, 3000);
//   }

// });
