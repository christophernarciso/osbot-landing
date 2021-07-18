const body = document.querySelector('body');
const menu = document.querySelector('#btnMenu');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fades = document.querySelectorAll('.has-fade');
const mobileLinks = document.querySelectorAll('.mobile__link');

// Listener for our mobile friendly menu
menu.addEventListener('click', function () {
  // Toggle no scroll on click
  body.classList.toggle('no-scroll');
  // Toggle open css
  const isOpen = header.classList.toggle('open');
  if (isOpen) {
    fades.forEach((el) => {
      el.classList.remove('fade-out');
      el.classList.add('fade-in');
    });
  } else {
    fades.forEach((el) => {
      el.classList.remove('fade-in');
      el.classList.add('fade-out');
    });
  }
});

// Listener for our mobile menu links when a user selects a option.
for (var link of mobileLinks) {
  link.addEventListener('click', function () {
    console.log('Clicked a link');
    // Remove no scroll on click
    body.classList.remove('no-scroll');

    // Remove the open on click
    header.classList.remove('open');

    // Remove the fade animations
    fades.forEach((el) => {
      el.classList.remove('fade-in');
      el.classList.add('fade-out');
    });
  });
}

// Copyright purposes
const footerDate = document.getElementsByClassName("footer__year");
if (footerDate) {
  footerDate[0].innerHTML = new Date().getFullYear();
}

// When the user clicks on the button, smooth scroll to the top of the document
// Credit: https://gist.github.com/ricardozea/abb9f98a19f6d04a0269
function topFunction() {
  $("html, body").animate({
    scrollTop: $('#main').offset().top
  }, 150);
}

//Smooth scrolling with links
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });