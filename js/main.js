$(document).ready(function () {
    $('.toggle').click(function () {
        $('.items').toggleClass('anim');
    });
});

window.addEventListener('scroll', function () {
    let onState = window.pageYOffset;
    if (onState > 350) {
        document.getElementById('acerca').classList.add('in-out');
    }
    if (onState > 900) {
        document.getElementById('temas').classList.add('in-out');
    }
    if (onState > 1850) {
        document.getElementById('cursos').classList.add('in-out');
    }
    if (onState > 2450) {
        document.getElementById('fundadores').classList.add('in-out');
    }
    
})