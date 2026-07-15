document.querySelectorAll('.starfield').forEach(function (field) {
  var count = 40;
  for (var i = 0; i < count; i++) {
    var s = document.createElement('div');
    s.className = 'star';
    var size = Math.random() * 2 + 1;
    s.style.width = size + 'px';
    s.style.height = size + 'px';
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 100 + '%';
    s.style.animationDelay = (Math.random() * 4) + 's';
    field.appendChild(s);
  }
});
