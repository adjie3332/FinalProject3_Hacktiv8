// Text Typed
var options = {
    strings: ['coding with us,', 'design with us,', 'to be creative with us.'],
    typeSpeed: 70,
    loop: true,
  };
  
  var typed = new Typed('.typed', options);

  
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });


(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();