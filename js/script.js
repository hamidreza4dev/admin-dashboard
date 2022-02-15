var $ = document;

var menuButton = $.getElementById('closeSideBar');
var sideText = $.querySelectorAll('.side-text');
var sidebarTitle = $.querySelectorAll('.sidebar-title');

menuButton.addEventListener('click', () => {
    sidebarTitle.forEach(function (element, index){
        element.classList.toggle('active-sidebar')
    })
})
