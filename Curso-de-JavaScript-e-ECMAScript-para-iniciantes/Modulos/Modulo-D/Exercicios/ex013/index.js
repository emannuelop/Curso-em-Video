var agora = new Date()
var diaSem = agora.getDay()

/*
    0 = Domingo
    1 = Segunda-feira
    2 = Terça-feira
    3 = Quarta-feira
    4 = Quinta-feira
    5 = Sexta-feira
    6 = Sábado
*/

//console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 01:
        console.log('Segunda-feira')
        break
    case 02: 
        console.log('Terça-feira')
        break
    case 03:
        console.log('Quarta-feira')
        break
    case 04: 
        console.log('Quinta-feira')
        break
    case 05:
        console.log('Sexta-feira')
        break
    case 06: 
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}