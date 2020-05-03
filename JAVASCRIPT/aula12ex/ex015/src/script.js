function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/child-boy.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/young.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/men.png')
            } else {
                img.setAttribute('src', 'img/old.png')
            }
        } else if (fsex[1].value) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/child-girl.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/young-woman.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/woman.png')
            } else {
                //Idoso
                img.setAttribute('src', 'img/old-woman.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }

} 