document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#fff',
    lineColor: '#fff',
    directionX: 'center',
    lineWidth: '0.5',
    density: '15000',
    particleRadius: '1.5',
    parallax: false
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);