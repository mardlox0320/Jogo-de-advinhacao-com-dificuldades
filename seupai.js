const h2 = document.getElementById("h2")
const input = document.getElementById("input")
const h3 = document.getElementById("h3")
const h4 = document.getElementById("h4")
const gerador = document.getElementById("gerador")
const h = document.getElementById("h")
const troço = document.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {
        verificar()
    }
});

let generate = 0

const gerar = () => {
generate = Math.floor(Math.random() * (100 - 1) + 1 )
h3.innerText = "um numero foi gerado, tente advinhar"
let retornar = h4.innerHTML = `<br><button type="button" onclick="verificar()">verificar</button>`
input.disabled = false
gerador.disabled = true
}
const verificar = () => {
    const val = Number(input.value)
    if(input.value == '') {
    alert("digite um número");
    }
    else if(val > generate) {
    h2.innerText = "alto demais"
    setTimeout(input.value = '', 3000)
    } 
    else if(val < generate) {
    h2.innerText = "baixo demais"
    setTimeout(input.value = '', 3000)
    }
    else if (val == generate) {
    h2.innerText = "Acertou!",
    h.innerHTML = `<br> <button onclick="final()">jogar de novo</button>`

    } 
}
const final = () => {
    window.location.reload()
}