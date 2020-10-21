function handleFocus(event) {
  console.log('focus event was fired.');
  console.log('focus event target name:', event.target.name);
  console.log($userName.value);

}

function handleBlur(event) {
  console.log('handle event was fired.');
  console.log('handle event target name:', event.target.name);
}

function handleInput(event) {
  console.log('input target name:', event.target.name);
  console.log('input target value:', event.target.value);

}

var $userName = document.querySelector('#user-name');
var $userEmail = document.querySelector('#user-email');
var $userMsg = document.querySelector('#user-message');

$userName.addEventListener('input', handleFocus);
$userName.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userMsg.addEventListener('input', handleInput);
