var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var ress = document.getElementById('ress')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inLista(n,I){
    if (I.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}
function add(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        ress.innerHTML = ''
    }else{
        window.alert('Valor já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        ress.innerHTML = ''
        ress.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        ress.innerHTML += `<p>O maior valor informado é ${maior}.</p>`
        ress.innerHTML += `<p>O menor valor informado é ${menor}.</p>`
        ress.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        ress.innerHTML += `<p>A media dos valores é ${media}.</p>`
    }
}