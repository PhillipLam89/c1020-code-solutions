var $tabContainer = document.querySelector('.tab-container');
var $tabNode = document.querySelectorAll('.tab');
var $viewNode = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabNode.length; i++) {
      if (event.target === $tabNode[i]) {
        $tabNode[i].className = 'tab active';
      } else $tabNode[i].className = 'tab';
    }
  }
  var dataViewValues = event.target.getAttribute('data-view');

  for (var j = 0; j < $viewNode.length; j++) {
    if ($viewNode[j].getAttribute('data-view') === dataViewValues) {
      $viewNode[j].className = 'active';
    } else $viewNode[j].className = 'hidden';
  }

});
