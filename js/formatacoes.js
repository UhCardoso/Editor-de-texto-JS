/**
 *  lembrete:
 *  - criar responsividade
 *  - Efetuar formatações somente nas palavras selecionadas
 *  - Desfazer última formatação
 * **/

function normalLetter() {
    document.getElementById('texto').style.fontWeight = "400";
    document.getElementById('texto').style.fontStyle = 'normal';
}

function negrito() {
    document.getElementById('texto').style.fontWeight = "bold";
}

function italic() {
    document.getElementById('texto').style.fontStyle = "italic";
}

function left() {
    document.getElementById('texto').style.textAlign = "left";
}

function center() {
    document.getElementById('texto').style.textAlign = "center";
}

function right() {
    document.getElementById('texto').style.textAlign = "right";
}

function uppercase() {
    document.getElementById('texto').style.textTransform = "uppercase";
}

function lowercase() {
    document.getElementById('texto').style.textTransform = "lowercase";
}

function capitalize() {
    document.getElementById('texto').style.textTransform = "capitalize";
}

function clearText() {
    document.getElementById('texto').style.fontWeight = "normal";
    document.getElementById('texto').style.fontStyle = "normal";
    document.getElementById('texto').style.textAlign = "left";
    document.getElementById('texto').style.textTransform = "none";
    document.getElementById('texto').value = '';
}