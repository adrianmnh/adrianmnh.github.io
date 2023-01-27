
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







// SLiding Blocks

var container = document.getElementById("container");
var blocks = document.querySelectorAll(".block");
var currentIndex = -1;

// Add event listener for left and right arrow keys
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 37) {
    // Left arrow key
    prevBlock();
  } else if (event.keyCode === 39) {
    // Right arrow key
    nextBlock();
  }
});

function prevBlock() {
  // Remove active class from current block
  blocks.forEach(function(block) {
    block.classList.remove("active");
    block.classList.add("inactive");
  });

  // Update current index
  currentIndex--;
  // Check if first block
  if (currentIndex < 0) {
    currentIndex = (currentIndex + blocks.length) % blocks.length;
  }
  // Add active class to previous block
  blocks[currentIndex].classList.remove("inactive");
  blocks[currentIndex].classList.add("active");
}

function nextBlock() {
  // Remove active class from current block
  blocks.forEach(function(block) {
    block.classList.add("inactive");
    block.classList.remove("active");
  });
  
  // Update current index
  currentIndex = (currentIndex+1+blocks.length) % blocks.length;

  // Add active class to next block
  blocks[currentIndex].classList.remove("inactive");
  blocks[currentIndex].classList.add("active");
}


// $("#container").on("swipeleft", nextBlock);
// $("#container").on("swiperight", prevBlock);
$("#container").on("click", nextBlock);



// Initialize the timer
// var timer = setInterval(nextBlock, 10);

// Create an observer
var observerBlocks = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
      if (entry.isIntersecting) {
          // Start the timer when the block enters the viewport
          timer = setInterval(nextBlock, 5000);


          // // Clear the timer on swipe or click
          // $("#container").on("swipeleft", function() {
          //   clearInterval(timer);
          //   nextBlock();
          //   timer = setInterval(nextBlock, 5000);
          // });
          // $("#container").on("swiperight", function() {
          //   clearInterval(timer);
          //   prevBlock();
          //   timer = setInterval(nextBlock, 5000);
          // });
          $("#container").on("click", function() {
            clearInterval(timer);
            currentIndex--;
            nextBlock();
            timer = setInterval(nextBlock, 5000);
          });
          // Get the container element
          var c = $("#container");
          
          // Attach the TouchSwipe event to the container element
          c.swipe({
              swipeLeft: function() {
                  // Code to execute when a swipe left event is detected
                  clearInterval(timer);
                  console.log("Swipe left");
                  prevBlock();
                  timer = setInterval(nextBlock, 2000);
                  
                },
                swipeRight: function() {
                  // Code to execute when a swipe right event is detected
                  clearInterval(timer);
                  console.log("Swipe right");
                  nextBlock();
                  timer = setInterval(nextBlock, 2000);
              },
              threshold: 15 // the minimum distance required for a swipe event to be detected
          });



      } else {
          // Stop the timer when the block exits the viewport
          clearInterval(timer);
      }
  });
});

// Observe the parent container
observerBlocks.observe(document.getElementById("sliding-blocks"));



