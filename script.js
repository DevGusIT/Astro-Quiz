function verificarResposta(pergunta, num) {
    const respostas = document.getElementsByName(pergunta);
    let resultado = "";
    let isCorrect = false;

    for (let i = 0; i < respostas.length; i++) {
        if (respostas[i].checked) {
            if (respostas[i].value === "Certo") {
                resultado = "Parabéns, Dani!";
                isCorrect = true;
            } else {
                resultado = "Precisa estudar mais, Dani!";
                isCorrect = false;
            }
            document.getElementById("resultado" + num).innerText = resultado;
            break;
        }
    }

    // Acionar os efeitos do foguete
    if (isCorrect) {
        triggerRocketLaunch();
    } else {
        triggerRocketExplosion();
    }
}

function triggerRocketLaunch() {
    const rocket = document.getElementById('rocket');
    const feedback = document.getElementById('feedback-message');

    // Resetar animações
    rocket.style.display = 'none';
    void rocket.offsetWidth; // Força reflow para reiniciar animação
    rocket.style.display = 'block';
    rocket.style.animation = 'launch 2s forwards';

    // Mensagem de feedback
    feedback.innerText = "Parabéns, Dani!";
    feedback.style.color = "#00ff00";
    feedback.style.opacity = "1";

    // Ocultar após a animação
    rocket.addEventListener('animationend', () => {
        rocket.style.display = 'none';
        feedback.style.opacity = "0";
    }, { once: true });
}

function triggerRocketExplosion() {
    const explosion = document.getElementById('explosion');
    const feedback = document.getElementById('feedback-message');

    // Resetar animações
    explosion.style.display = 'none';
    void explosion.offsetWidth; // Força reflow para reiniciar animação
    explosion.style.display = 'block';
    explosion.style.animation = 'explode 1s forwards';

    // Mensagem de feedback
    feedback.innerText = "Precisa estudar mais, Dani!";
    feedback.style.color = "#ff0000";
    feedback.style.opacity = "1";

    // Ocultar após a animação
    explosion.addEventListener('animationend', () => {
        explosion.style.display = 'none';
        feedback.style.opacity = "0";
    }, { once: true });
}
