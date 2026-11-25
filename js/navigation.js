(function () {
  'use strict';
  var button = document.querySelector('.navbar-toggle');
  var menu = document.getElementById('navbar-collapse-1');
  if (!button || !menu) return;

  button.addEventListener('click', function () {
    var expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    button.classList.toggle('collapsed', expanded);
    menu.classList.toggle('in', !expanded);
  });
}());
