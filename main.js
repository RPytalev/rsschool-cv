'use strict';

window.addEventListener('scroll', function() {

    let buttonUp = document.querySelector('.button-up');
    let value = window.scrollY;
    let height = document.documentElement.clientHeight;

    if(value > 0) {
        
        buttonUp.style.top = value + 650 + 'px';
        buttonUp.style.right = '3%';
    }

    if (value > height) {

        buttonUp.classList.add('showButtonUp');
    }

    if (value < height) {

      buttonUp.classList.remove('showButtonUp');
    }
});

let buttonUp = document.querySelector('.button-up');
  buttonUp.addEventListener('mouseenter', function() {
    let buttonUpOrange = document.getElementById('button-up-orange');
    let buttonUpWhite = document.getElementById('button-up-white');
    buttonUpWhite.style.display = 'flex';
    buttonUpOrange.style.display = 'none';
  });

  buttonUp.addEventListener('mouseleave', function() {
    let buttonUpOrange = document.getElementById('button-up-orange');
    let buttonUpWhite = document.getElementById('button-up-white');
    buttonUpWhite.style.display = 'none';
    buttonUpOrange.style.display = 'flex';
});

let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function() {
let hamburgerMenu = document.querySelector('.hamburger-menu');
let lineOne = document.querySelector('.line-1');
let lineTwo = document.querySelector('.line-2');
  hamburgerMenu.classList.toggle('active');
  hamburgerMenu.classList.toggle('active-2');
  lineOne.classList.toggle('active');
  lineTwo.classList.toggle('active');
});
