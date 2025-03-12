const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburguer.classList.remove('active');
        navMenu.classList.remove('active');
    })
})

function revelarAoRolar() {
    const elementoProjetos = document.querySelector('.meus-projetos-container');
    const elementoHabilidades = document.querySelector('.habilidades-container');
    const alturaDaTela = window.innerHeight;

    if (elementoProjetos) {
        const posicaoProjetos = elementoProjetos.getBoundingClientRect().top;
        if (posicaoProjetos < alturaDaTela - 100) {
            elementoProjetos.classList.add('aparecer');
        }
    }

    if (elementoHabilidades) {
        const posicaoHabilidades = elementoHabilidades.getBoundingClientRect().top;
        if (posicaoHabilidades < alturaDaTela - 100) {
            elementoHabilidades.classList.add('aparecer');
        }
    }
}

window.addEventListener('scroll', revelarAoRolar);