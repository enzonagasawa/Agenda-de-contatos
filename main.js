const form = document.getElementById('colunas')
const numeros = [ ];
let linhas = ' '

form.addEventListener('submit', function(e){
    e.preventDefault(); 

    var inputnomeContato = document.getElementById('nomeContato')
    var inputnumeroContato = document.getElementById('numeroContato')

    if (numeros.includes(inputnumeroContato.value)) {
        alert(`o número: ${inputnumeroContato.value} já foi inserido.`)
    }

    numeros.push(inputnumeroContato.value)

    let linha = `<tr>`
    linha += `<td> <img src="/Images/foto-de-perfil.png" alt="foto-de-perfil">`
    linha += `<div> <h2>${inputnomeContato.value}</h2>`
    linha += `<h3>${inputnumeroContato.value}</h3></div></td>`
    linha += `</tr>`


    linhas += linha

    const corpotabela = document.querySelector('tbody')
    corpotabela.innerHTML = linhas

    inputnomeContato.value = ''
    inputnumeroContato.value = ''
})

