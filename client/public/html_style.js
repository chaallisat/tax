
// Materialize sideNavBar JS
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
  });
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
  $(".sidenav-trigger").on("click", function(event) {
    var instance = M.Sidenav.getInstance(elems);
    instance.open();
  });
  
  // Materialize Parallax
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    // var instances = M.Parallax.init(elems, options);
  });
  $(document).ready(function(){
    $('.parallax').parallax();
    var instance = M.Parallax.getInstance(elems);
  });
  