
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

var observerImages = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('active');
      observerImages.unobserve(entry.target);
    }
  });
});

var images = document.querySelectorAll('.image-grid img');
images.forEach(function(image) {
  observerImages.observe(image);
});




// Initialize the timer
var timer = null;



// SLiding Blocks

var container = document.getElementById("container");
var blocks = document.querySelectorAll(".block");
var currentIndex = -1;

// Add event listener for left and right arrow keys
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 37) {
    // Left arrow key
    clearInterval(timer);
    prevBlock();
    // slideBlock('left');
    timer = setInterval(nextBlock, 5000);
  } else if (event.keyCode === 39) {
    // Right arrow key
    clearInterval(timer);
    nextBlock();
    // slideBlock('left');
    timer = setInterval(nextBlock, 5000);
  }
});

function prevBlock() {
  // Remove active class from current block
  console.log("Left");
  blocks.forEach(function(block) {
    block.classList.remove("active");
    block.classList.remove("inactive-left");
    // block.classList.add("inactive-left");
    block.classList.add("inactive-right");
    
    // blocks[(currentIndex-1+blocks.length)%blocks.length].classList.add("inactive-right");
    block.classList.remove("red");
    block.classList.add("blue");
  });
  
  
  // Update current index
  currentIndex--;
  // Check if first block
  if (currentIndex < 0) {
    currentIndex = (currentIndex + blocks.length) % blocks.length;
  }
  // Add active class to previous block
  blocks[currentIndex].classList.remove("inactive-right");
  blocks[currentIndex].classList.remove("inactive-left");
  blocks[currentIndex].classList.add("active");
  // blocks[currentIndex].classList.add("inactive-right");
}

function nextBlock() {
  console.log("RIGHT");
  
  // Remove active class from current block
  blocks.forEach(function(block) {
    block.classList.remove("active");
    block.classList.remove("inactive-right");
    // block.classList.add("inactive-right");
    block.classList.add("inactive-left");

    // blocks[(currentIndex+1+blocks.length)%blocks.length].classList.add("inactive-left");
    block.classList.remove("blue");
    block.classList.add("red");
  });
  // blocks[currentIndex].classList.remove("active");
  // blocks[currentIndex].classList.add("inactive-right");
  
  // Update current index
  currentIndex = (currentIndex+1+blocks.length) % blocks.length;

  // Add active class to next block
  blocks[currentIndex].classList.remove("inactive-right");
  blocks[currentIndex].classList.remove("inactive-left");
  blocks[currentIndex].classList.add("active");
}


// $("#container").on("swipeleft", nextBlock);
// $("#container").on("swiperight", prevBlock);
$("#container").on("click", nextBlock);




// Create an observer
var observerBlocks = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {

    var c = $("#container");
          
      if (entry.isIntersecting) {


          timer = setInterval(nextBlock, 5000);
  
        
        // Attach the TouchSwipe event to the container element
        c.swipe({
          swipeLeft: function() {
              // Code to execute when a swipe left event is detected
              observerBlocks.unobserve(document.getElementById("sliding-blocks"));
              clearInterval(timer);
              console.log("Swipe left");
              prevBlock();
              // slideBlock('left');
              timer = setInterval(nextBlock, 5000);

              
            },
            swipeRight: function() {
              // Code to execute when a swipe right event is detected
              clearInterval(timer);
              console.log("Swipe right");
              // slideBlock('right');
              nextBlock();
              timer = setInterval(nextBlock, 5000);
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


// function slideBlock(direction) {
//   var block = $('.block');
//   var currentIndex = $('.block.active').index();
//   var nextIndex;

//   if (direction === 'left') {
//     nextIndex = currentIndex === 0 ? block.length - 1 : currentIndex - 1;
//     block.eq(currentIndex).animate({left: '-=50px'}, 100).animate({left: '+=50px'}, 100).animate({left: '-=100%'}, 400);
//   } else {
//     nextIndex = currentIndex === block.length - 1 ? 0 : currentIndex + 1;
//     block.eq(currentIndex).animate({left: '+=50px'}, 100).animate({left: '-=50px'}, 100).animate({left: '+=100%'}, 400);
//   }

//   block.eq(nextIndex).addClass('active').animate({left: '0'}, 400);
//   block.eq(currentIndex).removeClass('active');
// }
