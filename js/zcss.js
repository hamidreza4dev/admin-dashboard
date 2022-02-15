try {
    var $ = document;

    function _id(elementId) {
        return $.getElementById(elementId);
    }

    function _class(elementClass) {
        return $.getElementsByClassName(elementClass);
    }

// start

// dropDown
    var btnDropDown = $.querySelectorAll('.btn-drop-down');
    var btnIcon = $.querySelectorAll(".btn-icon");
    for (let i = 0; i < btnDropDown.length; i++) {
        btnDropDown[i].addEventListener('click', function () {
            // select btn child
            var btnDropDownChild = _id('btn-drop-down-child');
            // make btn child activate and deactivate
            btnDropDownChild.classList.toggle('active-drop-down');
            btnIcon[i].classList.toggle('active-rotate-drop-down-icon');

            console.log(btnDropDown[i], btnIcon[i]);
            // btnIcon();
        });
    }





// accordion
    var acc = $.querySelectorAll(".accordion");

    acc.forEach(function (item, indexNumber) {
        item.addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.style.margin = '0px'
            } else {
                panel.style.margin = '10px'
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
            btnIcon[indexNumber].classList.toggle('active-rotate-drop-down-icon');
        });
    })



// tab navigation
    var tabItemsChild = $.querySelectorAll('.tab-button'),
        tabcontent = $.querySelectorAll(".tab-content"),
        tabButton = $.querySelectorAll('.tab-button'),
        tabMother = $.querySelectorAll('.tab-mother'),
        tabDirection = $.querySelectorAll('.tab-direction')
    activeTab = $.querySelectorAll('.active-tab');

    for (var i = 0; i < tabMother.length; i++) {
        if (tabMother[i].dataset.type === 'tab-direction') {
            tabMother[i].classList.add('d-flex');
            tabDirection[i].style.minWidth = '15%'
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].classList.add('fg-1', 'fade');
            }
        }
    }

    tabButton.forEach(function(element, index) {
        element.addEventListener('click', function(){
            // element.parentElement.nextElementSibling.childNodes[index];
            // tabcontent[index].style.display = 'block';
            var NextTabChild = element.parentElement.nextElementSibling.children;
            console.log(element.classList);
            for (let i = 0; i < NextTabChild.length; i++) {
                NextTabChild[i].classList.remove('active-tab')
            }
            tabcontent[index].classList.add('active-tab');
            if (tabcontent[index].classList.contains('active-tab')) {

            }
        })
    });




// slider
    let slides = document.querySelectorAll('.slide'),
        dots = document.querySelectorAll('.dot'),
        next = document.querySelector('.next'),
        prev = document.querySelector('.prev');

    slides.forEach(function(slide, index) {
        slide.style.left = `${index * 100}%`;
    });

    var counter = 0;

    function clearCounter() {
        for (var i = 0; i < dots.length ; i++) {
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

        slides.forEach(function(slide){
            slide.style.transform = `translateX(-${counter * 100}%)`;
        });
        clearCounter();
        dots[counter].classList.add('active')

    }

    dots.forEach(function (Element, index) {
        Element.addEventListener('click', function(){
            counter = index;
            clearCounter();
            Element.classList.add('active')
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
    });

} catch (e) {}