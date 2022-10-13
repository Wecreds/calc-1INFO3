let btnNumeros = document.getElementsByClassName('numeros');
let visor = document.getElementById('visor');
let btnC = document.getElementById('btn-c');
let operador = document.getElementsByClassName('operador');
let bntIgual = document.getElementById('btn-igual');
let btnPonto = document.getElementById('btn-ponto');

for (let btn of btnNumeros) {
    btn.addEventListener('click', cliqueNumero);
}

function cliqueNumero(event) {
    if (isNaN(visor.innerHTML)) {
        if (event.type === 'click'){
            visor.innerHTML = event.target.innerHTML;
        } else {
            visor.innerHTML = event.key;
        }
    } else {
    if (event.type === 'click'){
        visor.innerHTML = visor.innerHTML + event.target.innerHTML;
    } else {
        visor.innerHTML = visor.innerHTML + event.key;
    }
}
}
btnPonto.addEventListener('click', cliquePonto);

function cliquePonto(event) {
    let valorVisor = Number(visor.innerHTML);
    if (!isNaN(visor.innerHTML + '.')) {
        visor.innerHTML = visor.innerHTML + event.target.innerHTML;
    }
}



function reset(event) {
    visor.innerHTML = "";

}

for (let i of operador) {
    i.addEventListener('click', cliqueOperador);
}

let valorSalvo;
let operacaoSalva;


function cliqueOperador(event) {

    if (!isNaN(visor.innerHTML)) {
        if (valorSalvo === undefined) {

            valorSalvo = Number(visor.innerHTML);
        }
        else {
            valorSalvo = calculoOperacao(valorSalvo, operacaoSalva, Number(visor.innerHTML));
        }
    }

    if (event.type === 'click') {
        operacaoSalva = event.target.innerHTML;
        visor.innerHTML = event.target.innerHTML;
    } else {
        operacaoSalva = event.key;
        visor.innerHTML = event.key;
    }
}



bntIgual.addEventListener('click', calcular);

function calcular(event) {
    if (valorSalvo != undefined && operacaoSalva != undefined && !isNaN(visor.innerHTML)) {
        visor.innerHTML = calculoOperacao(valorSalvo, operacaoSalva, Number(visor.innerHTML));
        valorSalvo = undefined;
        operacaoSalva = undefined;
    }

}

function calculoOperacao(valor1, operacao, valor2) {

    if (operacao === "+") {
        return valor1 + valor2
    }
    else if (operacao === "-") {
        return valor1 - valor2
    }
    else if (operacao === "/") {
        return valor1 / valor2
    }
    else if (operacao === "*") {
        return valor1 * valor2
    }
}

let body = document.getElementsByTagName("body")[0];

body.addEventListener(`keydown`, pressionou_tecla);

function pressionou_tecla(event) {

    if (event.keyCode === 13) {
        calcular(event);
    } else if (event.key === '+' || event.key === '-' || event.key === '/' || event.key === '*') {
        cliqueOperador(event);
    } else if (event.key === 'Backspace' || event.key === 'Escape') {
        reset(event);
    } else if (event.keyCode == '49' || event.keyCode == '50' || event.keyCode == '51' || event.keyCode == '52' || event.keyCode == '53' || event.keyCode == '54' || event.keyCode == '55 ' || event.keyCode == '56' || event.keyCode == '57' || event.keyCode == '48') {
        cliqueNumero(event);
    }
}