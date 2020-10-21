var $form = document.querySelector('#contact-form');

$form.addEventListener('submit', function (e) {
  e.preventDefault();
  var $name = document.querySelector('#user-name');
  var $email = document.querySelector('#user-email');
  var $message = document.querySelector('#user-message');
  var $collection = {};
  $collection.name = $name.value;
  $collection.email = $email.value;
  $collection.message = $message.value;
  console.log($collection);
  $form.reset();
});
