var $task = document.querySelector('.task-list');
$task.addEventListener('click', function (event) {
  console.log('the target event:', event.target);
  console.log('target events tag name:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    console.log('closest task list:', event.target.closest('.task-list-item'));
    event.target.closest('.task-list-item').remove();
  } else return false;
});
