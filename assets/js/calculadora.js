function SomenteNumero(e) {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla > 47 && tecla < 58)) return true;
    else {
        if (tecla == 8 || tecla == 0 || tecla == 46) return true;
        else return false;
    }
}

function exibirNaTela(valor) {
    const entrada = document.querySelector('#entrada');
    entrada.value += valor;
}

function limparTela() {
    let entrada = document.querySelector('#entrada');
    let saida = document.querySelector('#saida');

    entrada.value = '';
    saida.value = '';
}

function deletar() {
    let entrada = document.querySelector('#entrada');

    let string = entrada.value;
    let resultString = string.slice(0, -1);
    limparTela();
    exibirNaTela(resultString);
}

document.querySelectorAll('[btn-num]').forEach(e => {
    e.onclick = () => {
        exibirNaTela(e.innerHTML);
    }
});

const btnLimpar = document.querySelector('[btn-funcao="clear"]');
btnLimpar.onclick = () => {
    limparTela();
}

const btnDeletar = document.querySelector('[btn-funcao="del"]');
btnDeletar.onclick = () => {
    deletar();
}

const tempo = {
    milissegundo: 0.001,
    segundo: 1,
    minuto: 60,
    hora: 3600,
    dia: 86400,
    semana: 604800,
    mes: 2592000,
    ano: 31104000
}

/*** Função responsável pelo calculo ***/

// Tempo 1 representa a medida de tempo a ser convertida
// Tempo 2 representa a medida de tempo que deseja-se a conversao
function calcular(tempo1, tempo2, valor1) {

    if (tempo[tempo1] != tempo[tempo2]) {
        return (valor1 * tempo[tempo1]) / tempo[tempo2];
    }else{
        return valor1;
    }
}

function getValorInput(elem) {
    const input = document.querySelector(elem);
    return input.value;
}

function getValorSelect (elem) {
    const select = document.querySelector(elem);
    let valor = select.options[select.selectedIndex].value;
    return valor;
}

function exibirResultado (resultado) {
    const select = document.querySelector('#saida');
    select.value = resultado;
}

const btnCalc = document.querySelector('[btn-funcao="calc"]');
btnCalc.onclick = () => {
    let tmp1 = getValorSelect('#slc-entrada');
    let tmp2 = getValorSelect('#slc-saida');

    let valor = getValorInput('#entrada');
    
    let resultado = calcular(tmp1, tmp2, valor);

    exibirResultado(resultado);
}

function getIndexSelect (elem) {
    const select = document.querySelector(elem);
    return select.selectedIndex;
}

const btnTrocar = document.querySelector('.selects button');
btnTrocar.onclick = () => {

    const slc1 = document.querySelector('#slc-entrada');
    const slc2 = document.querySelector('#slc-saida');
    
    let index1 = getIndexSelect('#slc-entrada');
    let index2 = getIndexSelect('#slc-saida');

    slc1.selectedIndex = index2;
    slc2.selectedIndex = index1;
}


