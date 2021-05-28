//burger menu toggle button
(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.homeMenuWrapper');

    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());