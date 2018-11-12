function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

(function(){
  //  make sure the browser can handle js and return if not
  if (typeof(document.querySelector)==="undefined") {
    return;
  }
  //  js to run once dom is loaded
  document.addEventListener('DOMContentLoaded', function() {
      //  find the java script audio object
      var sound = document.querySelector('#js-audio');

      //  Make the html player invisible and the js one visible
      document.querySelector('#audio-controls').className = 'invisible';
      document.querySelector('#js-audio').className = '';


      //  Listen for the link to be clicked and then play the audio
      sound.addEventListener('click', function() {
        var doorbell = new Audio('media/doorbell.mp3');
        doorbell.play();
      });

  });


})();
