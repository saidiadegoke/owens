const toggle = document.getElementById('toggle');
const topnav = document.getElementById('topnav');

toggle.addEventListener('click', function() {
    console.log('Show the menu');
    const menu = document.getElementById('menu');
    if(menu.classList.contains('show')) {
        menu.classList.remove('show');
        menu.classList.add('hide');
    } else {
        menu.classList.remove('hide');
        menu.classList.add('show');
    }
});

topnav.addEventListener('scroll', function() {
    
});

window.onscroll = function() {
    console.log(document.body.scrollTop, document.documentElement.scrollTop);
}