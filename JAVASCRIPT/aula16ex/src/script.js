let valores = []
let txtn = document.getElementById('txtn')
let dados = document.getElementById('slctn')
let res = document.getElementById('res')

function adicionar() {
    if (txtn.value.length == 0 || txtn.value < 1 || txtn.value > 100 || inLista(txtn.value, valores)) {
        alert('[ERRO] Informe um número válido')
    } else {
        let n = Number(txtn.value)
        valores.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        dados.appendChild(item)
        res.innerHTML = ''
    }
    txtn.value = ''
    txtn.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        res.innerHTML = ''
        let maiorValor = 0, menorValor = 999, soma = 0
        
        for (let i = 0; i < valores.length; i++) {
            if (valores[i] > maiorValor) {
                maiorValor = valores[i]
            }
            if (valores[i] < menorValor) {
                menorValor = valores[i]
            }
            soma += valores[i]
        }
        res.innerHTML += `Ao todo temos ${valores.length} números cadastrados<br>`
        res.innerHTML += `O maior valor informado foi ${maiorValor}<br>`
        res.innerHTML += `O menor valor informado foi ${menorValor}<br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}<br>`
        res.innerHTML += `A média dos valores digidatos é ${soma/valores.length}.`
    }
}

function inLista(num, list) {
    if (list.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}
