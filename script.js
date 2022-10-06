let btnNumeros = document.querySelectorAll(`.numeros`);
let visor = document.getElementById(`visor`);
let btnC = document.querySelectorAll(`.btn-c`);
let operador = document.querySelectorAll(`.operador`);

for (let btn of btnNumeros) {
btn.addEventListener(`click`, cliqueNumero);
}

function cliqueNumero(event) {
    visor.innerHTML = visor.innerHTML + event.target.innerHTML;
}

function reset() {
    visor.innerHTML = ""
}

for (let i of operador) {
 i.addEventListener(`click`, cliqueOperador);
}

let valorSalvo;
let operacaoSalva;

function cliqueOperador(event) {
    if (!isNaN(visor.innerHTML)) {
        if (valorSalvo === null) {
            valorSalvo = Number(visor.innerHTML);
        }
        else {
            valorSalvo = calculoOperacao(valorSalvo, operacaoSalva, Number(visor.innerHTML))
        }
    }
operacaoSalva = event.target.innerHTML
visor.innerHTML = event.target.innerHTML
}

function calculoOperacao(valor1, operacao, valor2) {
    if (operacao === "+") return valor1+valor2
    else if (operacao === "-") return valor1-valor2
    else if (operacao === "/") return valor1/valor2
    else if (operacao === "*") return valor1*valor2
}
