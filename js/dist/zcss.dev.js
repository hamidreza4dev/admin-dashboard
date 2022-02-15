"use strict";

var $ = document;

function _id(elementId) {
  return $.getElementById(elementId);
}

function _class(elementClass) {
  return $.getElementsByClassName(elementClass);
} // start
// dropDown


var btnDropDown = $.querySelectorAll('.btn-drop-down');

for (var _i = 0; _i < btnDropDown.length; _i++) {
  btnDropDown[_i].addEventListener('click', function () {
    // select btn child
    var btnDropDownChild = _id('btn-drop-down-child'); // make btn child activate and deactivate


    btnDropDownChild.classList.toggle('active-drop-down');
    btnIcon();
  });
}

function btnIcon() {
  var btnIcon = $.querySelectorAll(".btn-icon");

  for (var _i2 = 0; _i2 < btnIcon.length; _i2++) {
    btnIcon[_i2].classList.toggle('active-rotate-drop-down-icon');
  }
} // accordion


var acc = _class("accordion");

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.margin = '0px';
    } else {
      panel.style.margin = '10px';
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    btnIcon();
  });
} // tab navigation


var tabItemsChild = $.querySelectorAll('.tab-button'),
    tabcontent = $.querySelectorAll(".tab-content"),
    tabButton = $.querySelectorAll('.tab-button'),
    tabMother = $.querySelectorAll('.tab-mother'),
    tabDirection = $.querySelectorAll('.tab-direction');

for (var i = 0; i < tabMother.length; i++) {
  if (tabMother[i].dataset.type === 'tab-direction') {
    tabMother[i].classList.add('d-flex');
    tabDirection[i].style.minWidth = '15%';

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.add('fg-1', 'fade');
    }
  }
}

tabButton.forEach(function (element, index) {
  element.addEventListener('click', function () {
    // element.parentElement.nextElementSibling.childNodes[index];
    // tabcontent[index].style.display = 'block';
    var NextTabChild = element.parentElement.nextElementSibling.children;
    console.log(element.classList);

    for (var _i3 = 0; _i3 < NextTabChild.length; _i3++) {
      NextTabChild[_i3].classList.remove('active-tab');
    }

    tabcontent[index].classList.add('active-tab');
  });
}); // slider

var slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot'),
    next = document.querySelector('.next'),
    prev = document.querySelector('.prev');
slides.forEach(function (slide, index) {
  slide.style.left = "".concat(index * 100, "%");
});
var counter = 0;

function clearCounter() {
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = 'dot';
  }
}

function carousel() {
  if (counter == slides.length) {
    counter = 0;
  }

  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach(function (slide) {
    slide.style.transform = "translateX(-".concat(counter * 100, "%)");
  });
  clearCounter();
  dots[counter].classList.add('active');
}

dots.forEach(function (Element, index) {
  Element.addEventListener('click', function () {
    counter = index;
    clearCounter();
    Element.classList.add('active');
    carousel();
  });
});
next.addEventListener('click', function () {
  counter++;
  carousel();
  console.log(counter);
});
prev.addEventListener('click', function () {
  counter--;
  carousel();
  console.log(counter);
}); // navs

var nav = _id("nav"); // hide on scroll


if (_id('os-nav')) {
  var prevScrollpos = window.pageYOffset,
      onScrollNav = _id("os-nav");

  nav.style.marginBottom = onScrollNav.scrollHeight + 'px';
  onScrollNav.style.marginBottom = onScrollNav.style.height;

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      onScrollNav.style.top = "0";
    } else {
      onScrollNav.style.top = "-50px";
    }

    prevScrollpos = currentScrollPos;
  };
} // sticky Nav


if (_id('s-nav')) {
  var navbar = document.getElementById("s-nav");
  var sticky = navbar.offsetTop;

  window.onscroll = function () {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };
} // shrink nav


if (_id('sh-nav')) {
  var shrinkNav = _id("sh-nav"),
      shrinkNavLogo = _id("logo");

  9 + 0;
  nav.style.marginBottom = shrinkNav.scrollHeight + 'px';

  window.onscroll = function () {
    if ($.body.scrollTop > 80 || $.documentElement.scrollTop > 80) {
      shrinkNav.style.padding = "10px 5px";
      shrinkNavLogo.style.fontSize = "15px";
    } else {
      shrinkNav.style.padding = "30px 10px";
      shrinkNavLogo.style.fontSize = "25px";
    }
  };
}