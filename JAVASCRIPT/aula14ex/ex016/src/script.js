function contar () {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.querySelector('input#fim').value)
    var passo = Number(document.getElementById('passo').value)

    if (inicio < 0 || fim <= 0 || passo <= 0) {
        alert('[ERRO] Preencha todos os campos corretamente!')
    } else {
        var msg = document.querySelector('div#msg')
        var res = document.createElement('div')
        res.setAttribute('id', 'res')
        
        for (var i = inicio; i <= fim; i += passo) {
            res.innerHTML +=`${i} &#128073; ` 
        }
        res.innerHTML += '&#127937;'
        msg.innerHTML = 'Contando:'
        msg.appendChild(res)
        
    }
}