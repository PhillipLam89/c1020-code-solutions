function handleFocus(event) {
  console.log('focus event was fired.');
  console.log('focus event target name:', event.target.name);
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

$userName.addEventListener('input', handleInput);
$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);

$userEmail.addEventListener('input', handleInput);
$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);

$userMsg.addEventListener('input', handleInput);
$userMsg.addEventListener('focus', handleFocus);
$userMsg.addEventListener('blur', handleBlur);
