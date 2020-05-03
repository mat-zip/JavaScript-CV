var data = new Date()
var hora = 20

console.log(`Agora são ${hora} horas`)
if(hora <= 5){
    console.log('Boa madrugada');
}else if(hora < 12){
    console.log('Bom dia!')
}else if(hora <= 18){
    console.log('Boa tarde!')
}else if(hora <= 23){
    console.log('Boa noite!');
}