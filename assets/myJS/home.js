// My skills and technologies bubble-up

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
/* --------------------------------------------------------------------------------- */

var slidingBlockInterval = 7000;


// When user enters the view port
var observerImages = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.intersectionRatio > 0) {

      entry.target.classList.add('loaded');
      setTimeout(() => {
        
        entry.target.classList.add('inactive');
        entry.target.classList.remove('loaded');

      }, 6000);
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
    timer = setInterval(nextBlock, slidingBlockInterval);
  } else if (event.keyCode === 39) {
    // Right arrow key
    clearInterval(timer);
    nextBlock();
    // slideBlock('left');
    timer = setInterval(nextBlock, slidingBlockInterval);
  }
});

function prevBlock() {
  // Remove active class from current block
  console.log("Left");
  blocks.forEach(function(block) {
    block.classList.remove("inactive");
    block.classList.remove("active");
    block.classList.remove("inactive-left");
    block.classList.add("inactive-right");
    
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
}

function nextBlock() {
  console.log("RIGHT");
  
  // Remove active class from current block
  blocks.forEach(function(block) {
    block.classList.remove("inactive");
    block.classList.remove("active");
    block.classList.remove("inactive-right");
    block.classList.add("inactive-left");

    block.classList.remove("blue");
    block.classList.add("red");
  });

  
  // Update current index
  currentIndex = (currentIndex+1+blocks.length) % blocks.length;

  // Add active class to next block
  blocks[currentIndex].classList.remove("inactive-right");
  blocks[currentIndex].classList.remove("inactive-left");
  blocks[currentIndex].classList.add("active");
}

// Create an observer
var observerBlocks = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {

    var c = $("#container");

    c.on("click", function() {
        clearInterval(timer);
        // currentIndex--;
        nextBlock();
        timer = setInterval(nextBlock, slidingBlockInterval);
    });
          
      if (entry.isIntersecting) {
          timer = setInterval(nextBlock, slidingBlockInterval);
        // Attach the TouchSwipe event to the container element
        c.swipe({

          
          swipeLeft: function() {
              // Code to execute when a swipe left event is detected
              observerBlocks.unobserve(document.getElementById("sliding-blocks"));
              clearInterval(timer);
              console.log("Swipe left");
              prevBlock();
              timer = setInterval(nextBlock, slidingBlockInterval);

              
            },
            swipeRight: function() {
              // Code to execute when a swipe right event is detected
              clearInterval(timer);
              console.log("Swipe right");
              nextBlock();
              timer = setInterval(nextBlock, slidingBlockInterval);
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

/* --------------------------------------------------------------------------------- */

// Select the element you want to add the typewriter effect to
const typeElem = document.querySelector(".typewriter");

// Set the text you want to type out

const title = "Welcome to my Portfolio!";
// const theText = "My name is Adrian and I am a senior computer science student at CUNY Queens College. I am excited to share with you my experience and skills that I have developed throughout my educational and professional journey. My passion for technology, software development and computer science have driven me to pursue a career in this field.";

// Initialize variables for the typewriter effect
let typeIndex = 0;
let typeSpeed = 60;
let counter = 0;
let maxCounter = 5;

// Function to add the typewriter effect to the element
function typeWriter(string) {
  if(counter<=maxCounter){
    if(counter==maxCounter) typeElem.innerHTML = "";
    else if(counter%2==0) typeElem.innerHTML = "|";
    else typeElem.innerHTML ="⠀";

    counter++;
    setTimeout(typeWriter, 300, string);
    
  } else{
    console.log(string);
    if (typeIndex < string.length) {
      typeElem.innerHTML += string.charAt(typeIndex);
      typeIndex++;
    }
    
    setTimeout(typeWriter, typeSpeed, string);
  }
  
}

// Call the function to start the typewriter effect When document loads

document.addEventListener("DOMContentLoaded", function(event) {

    setTimeout(typeWriter, 1000, title);

    // too slow
    // const images = document.querySelectorAll('.image-grid img');

    // function fadeIn() {
    //     images.forEach(image => image.classList.add('active'));
    // }
    
    // setTimeout(fadeIn, 2000);

});



// const second = document.querySelector("#second");

// console.log(second.firstChild.text);
// const s = 'hi';
// typeWriter(s);
