var countdown = setInterval(function () {

  var num = Number(document.querySelector('h1').textContent);

  document.querySelector('h1').textContent = num - 1;

  function stopper() {
    clearInterval(countdown);
  }

  if (document.querySelector('h1').textContent === '0') {
    document.querySelector('h1').textContent = '~Earth Beeeelooowww Us~';
    stopper();
  }

}, 1000);
