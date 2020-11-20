// When the user scrolls the page, execute myFunction
var rightContainer = document.querySelector('.split.right') || window;
rightContainer.addEventListener('scroll', myFunction);

// Get the navbar
var navbar = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= 49 || rightContainer.scrollTop >= 49) {
    navbar.style.position = "sticky";
    navbar.style.top = "0";
    rightContainer.style.paddingTop = 0;
  } else {
    navbar.style.position = "absolute";
    navbar.style.top = "50px";
  }
}
