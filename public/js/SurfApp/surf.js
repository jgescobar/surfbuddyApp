$(document).ready(function(){

  console.log('surf.js linked!')

  $('.slideshow').cycle({
    fx: 'fade',
    pause:   1,
    speed: 4000,
    timeout:  3500,
    startingSlide: 0
  });


  var showModal = function(){
    $('#hello-modal').modal('show');
  };
  showModal();


  $("#beach-map-image").on("click", function() {
    $('#surf-modal-img').attr('src', $('#beach-map-image').attr('src'));
    $('#surf-modal').modal('show');
  });

});
