let listaDeNumeros = [];
let limiteLista = 10;
let numeroSecreto = gerarNumeroAleatorio();
let numeroTentativas = 1;

function mostrarNaTela(tag, texto){
    let msg = document.querySelector(tag);
    msg.innerHTML = texto
}

function mostrarMensagemInicial(){
    mostrarNaTela('h1', 'Jogo do Numero Secreto');
    mostrarNaTela('p', 'Escolha um numero de 1 a 10');
}


mostrarMensagemInicial()


function gerarNumeroAleatorio(){
    let numeroGerado = parseInt(Math.random() * limiteLista + 1);
    if(listaDeNumeros.length == limiteLista){
        listaDeNumeros = [];
    }
    if(listaDeNumeros.includes(numeroGerado)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumeros.push(numeroGerado);
        return numeroGerado;
    }
}



function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        let palavraTentativa = numeroTentativas > 1 ? "tentativas" : "tentativa";
        mostrarNaTela('h1', 'Acertou!');
        let mensagemTentativas = `Você descobriu o numero secreto com ${numeroTentativas} ${palavraTentativa}. Parabéns`;
        mostrarNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            mostrarNaTela('p', 'O numero secreto é menor');
        }else{
            mostrarNaTela('p', 'O numero é maior');
        }
        numeroTentativas ++; 
        limparCampo();
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    mostrarMensagemInicial();
    numeroTentativas = 1;
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}