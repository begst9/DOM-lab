// getElementById
const caixa1 = document.getElementById("caixa-1");
const caixa2 = document.getElementById("caixa-2");
const caixa3 = document.getElementById("caixa-3");

const principal = document.getElementById("btn-principal");
const secundario = document.getElementById("btn-secundario");

// getElementsByClassName
const caixas = document.getElementsByClassName("caixa");

// getElementsByTagName
const paragrafos = document.getElementsByTagName("p");

// querySelector
const destaque = document.querySelector(".destaque");

// querySelectorAll
const botoes = document.querySelectorAll("button");

// innerHTML
destaque.innerHTML = "Este texto foi alterado pelo JavaScript!";

// addEventListener + classList.toggle
for (let caixa of caixas) {
    caixa.addEventListener("click", function() {
        caixa.classList.toggle("destaque-js");
    });
}

// Botão principal
principal.addEventListener("click", function() {
    for (let caixa of caixas) {
        caixa.classList.add("destaque-js");
    }
});

// Botão secundário
secundario.addEventListener("click", function() {
    for (let caixa of caixas) {
        caixa.classList.remove("destaque-js");
    }
});

// createElement + appendChild
const novoParagrafo = document.createElement("p");
novoParagrafo.innerHTML = "Elemento criado pelo JavaScript!";
document.querySelector("main").appendChild(novoParagrafo);
