const recordes = 'pontuações'
const lista = document.getElementById("recordes")
const h2 = document.getElementById("h2")
const input = document.getElementById("input")
const h3 = document.getElementById("h3")
const h4 = document.getElementById("h4")
const geradorf = document.getElementById("geradorf")
const geradorm = document.getElementById("geradorm")
const geradord = document.getElementById("geradord")
const geradorc = document.getElementById("geradorc")
const h = document.getElementById("h")
const pera = document.getElementById("pera")
const o = document.getElementById("o")
let ovo = true
let dificuldade = ''

let savedRecordes = JSON.parse(localStorage.getItem(recordes) || '[]')
if (!Array.isArray(savedRecordes)) savedRecordes = []
savedRecordes.forEach(r => {
    if (r && typeof r === 'object' && r.tentativas !== undefined) {
        lista.innerHTML += `<li>${r.tentativas} - ${r.dificuldade}</li>`
    } else {
        lista.innerHTML += `<li>${r} - ${r.dificuldade}</li>`
    }
})

document.addEventListener('keydown', function(event) {
   if (ovo === true && event.key === 'Enter') {
       verificar() 
   }
});

let generate = 0

const transformar = () => {
    const Inputc = document.createElement("input");
    Inputc.id = "Inputc";
    Inputc.type = "number";
    Inputc.placeholder = "Digite o valor máximo (ex: 50)";
    pera.replaceWith(Inputc);
    o.innerHTML = '<button type="button" id="pronto" onclick="gerarcustom1()">pronto</button>'
    return Inputc
}

function gerarcustom2() {
    transformar()
    h3.innerText = "vai ser de 1 até?"
    geradorf.remove()
    geradorm.remove()
    geradord.remove()
    geradorc.remove()
}

function gerarcustom1() {
    const pronto = document.getElementById("pronto")
    const custom = document.getElementById("Inputc")
    if (!custom) {
        alert("Campo custom não encontrado")
        return
    }
    const valor = Number(custom.value)
    if (isNaN(valor) || valor <= 0) {
        alert("Digite um número válido maior que 0");
        return;
    }
    dificuldade = "(custom)"
    generate = Math.floor(Math.random() * valor) + 1
    h3.innerText = "um numero foi gerado, tente advinhar"
    h4.innerHTML = `<br><button type="button" onclick="verificar()">verificar</button>`
    input.disabled = false
    if (pronto) pronto.remove()
    if (custom) custom.remove()
}

const gerarfacil = () => {
    dificuldade = "(facil)"
    generate = Math.floor(Math.random() * 10) + 1
    h3.innerText = "um numero foi gerado, tente advinhar"
    h4.innerHTML = `<br><button type="button" onclick="verificar()">verificar</button>`
    input.disabled = false
    geradorf.remove()
    geradorm.remove()
    geradord.remove()
    geradorc.remove()
}

const gerarmedio = () => {
    dificuldade = "(medio)"
    generate = Math.floor(Math.random() * 100) + 1
    h3.innerText = "um numero foi gerado, tente advinhar"
    h4.innerHTML = `<br><button type="button" onclick="verificar()">verificar</button>`
    input.disabled = false
    geradorf.remove()
    geradorm.remove()
    geradord.remove()
    geradorc.remove()
}

const gerardificil = () => {
    dificuldade = "(dificil)"
    generate = Math.floor(Math.random() * 1000) + 1
    h3.innerText = "um numero foi gerado, tente advinhar"
    h4.innerHTML = `<br><button type="button" onclick="verificar()">verificar</button>`
    input.disabled = false
    geradorf.remove()
    geradorm.remove()
    geradord.remove()
    geradorc.remove()
}

let points = 0

const verificar = () => {
    const valStr = input.value
    if (valStr.trim() === '') {
        alert("digite um número");
        return
    }
    const val = Number(valStr)
    if (isNaN(val)) {
        alert("Digite um número válido")
        return
    }

    if (val > generate) {
        points++
        h2.innerText = "alto demais"
         input.value = ''
    } 
    else if (val < generate) {
        points++
        h2.innerText = "baixo demais"
         input.value = ''
    }
    else {
        points++
        h2.innerText = `Parabéns você acertou em ${points} tentativa(s)!`
        h.innerHTML = `<br> <button onclick="final()">jogar de novo</button>`
        if (input) input.remove()
        if (h4) h4.remove()
        if (h3) h3.remove()
        ovo = false
        savedRecordes.push({tentativas: points, dificuldade: dificuldade})
        localStorage.setItem(recordes, JSON.stringify(savedRecordes))
        lista.innerHTML += `<li>${points} - ${dificuldade}</li>`
    }
}

const final = () => {
    window.location.reload()
}

