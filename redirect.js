(function() {
  var p = window.location.pathname;
  var s = window.location.search || '';
  if (p && p !== '/' && p !== '/index.html') {
    var clean = p.replace(/^\/+/, '');
    window.location.replace('/#/' + clean + s);
  }
})();
