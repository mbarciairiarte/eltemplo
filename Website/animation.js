let animado = document.querySelectorAll(".animado");

function showScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i<animado.length; i++){
        let alturaAnimado = animado [i].offsetTop;
        if(alturaAnimado - 700 <scrollTop) {
            animado[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', showScroll);