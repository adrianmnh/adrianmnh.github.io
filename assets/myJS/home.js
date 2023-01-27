



// // when document loads

// document.addEventListener("DOMContentLoaded", function(event) {

//     setTimeout(function() {
//         var images = document.querySelectorAll('.fade-in-image');
//         var delay = 0;
//         images.forEach(function(image) {
//           setTimeout(function() {
//             image.classList.add('active');
//           }, delay);
//           delay += 400;
//         });

//     }, 1000)


//     // too slow
//     // const images = document.querySelectorAll('.image-grid img');

//     // function fadeIn() {
//     //     images.forEach(image => image.classList.add('active'));
//     // }
    
//     // setTimeout(fadeIn, 2000);



// });

// when entering view port

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
});

var images = document.querySelectorAll('.image-grid img');
images.forEach(function(image) {
  observer.observe(image);
});
