// Arrow up button
let scrollUpBtn = document.getElementById("scrollUpBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpBtn.style.display = "flex";
    scrollUpBtn.style.right = "3rem";
    scrollUpBtn.classList.add('laguna__arrowup_show');
  } else {
    scrollUpBtn.style.display = "none";
    scrollUpBtn.style.right = "-3rem";
    scrollUpBtn.classList.remove('laguna__arrowup_show');
  }
}

// When the user clicks on the button, scroll to the top of the document with animation
scrollUpBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}