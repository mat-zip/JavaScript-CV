function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.png'
        document.body.style.background = '#bc9d7e'
    } else if (hora >= 12 && hora <= 18){
        img.src =  'img/tarde.png'
        document.body.style.background = '#48662a'
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = '#1c2828'
    }
}

