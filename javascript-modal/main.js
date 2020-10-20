var $open = document.querySelector('.open-button');
var $hidden = document.querySelector('.hidden');
var $noButton = document.querySelector('.no-button');
var $blueBox = document.querySelector('.blue-box');
$open.addEventListener('click', function () {
  $hidden.className = 'shown';
  $blueBox.className = 'blue-box-absolute';
});

$noButton.addEventListener('click', function () {
  $hidden.className = 'hidden';
});
