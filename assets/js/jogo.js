let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;

function verificarPalpite() {
    let palpite = parseInt(document.getElementById('palpite').value);
    let mensagem = document.getElementById('mensagem');
    let tentativas = document.getElementById('tentativas');
    let btnChutar = document.getElementById('btnChutar');

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    tentativasRestantes--;

    if (palpite === numeroSecreto) {
        mensagem.textContent = "Você acertou! O número era " + numeroSecreto + "!";
        mensagem.className = "acerto";
        document.getElementById('palpite').disabled = true;
        btnChutar.disabled = true;
    } else if (tentativasRestantes === 0) {
        mensagem.textContent = "Você perdeu! O número secreto era " + numeroSecreto + ".";
        mensagem.className = "erro";
        document.getElementById('palpite').disabled = true;
        btnChutar.disabled = true;
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = "O número secreto é maior.";
        mensagem.className = "erro";
    } else {
        mensagem.textContent = "O número secreto é menor.";
        mensagem.className = "erro";
    }

    tentativas.textContent = "Tentativas restantes: " + tentativasRestantes;
}