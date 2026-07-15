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

document.querySelectorAll('.page-stars').forEach(function (field) {
  var count = 55;
  for (var i = 0; i < count; i++) {
    var s = document.createElement('div');
    s.className = 'page-star';
    var size = Math.random() * 2 + 1;
    s.style.width = size + 'px';
    s.style.height = size + 'px';
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 100 + '%';
    var twinkleDur = (Math.random() * 5 + 5).toFixed(1);
    var driftDur = (Math.random() * 20 + 25).toFixed(1);
    s.style.animationDuration = twinkleDur + 's, ' + driftDur + 's';
    s.style.animationDelay = (Math.random() * 6).toFixed(1) + 's, ' + (Math.random() * 10).toFixed(1) + 's';
    s.style.setProperty('--dx', (Math.random() * 24 - 12).toFixed(1) + 'px');
    s.style.setProperty('--dy', (Math.random() * 24 - 12).toFixed(1) + 'px');
    field.appendChild(s);
  }
});
