document.addEventListener("DOMContentLoaded", function(event) {
    setTimeout(function() {
        var images = document.querySelectorAll('.fade-in-image');
        var delay = 0;
        images.forEach(function(image) {
          setTimeout(function() {
            image.classList.add('active');
          }, delay);
          delay += 10;
        });

    }, 1000)
});