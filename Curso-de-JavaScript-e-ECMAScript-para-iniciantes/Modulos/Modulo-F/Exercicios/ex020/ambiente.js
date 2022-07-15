var num = [5, 8, 9, 3] // Array ou vetor
num[4] = 6 // Colacando o numero 6 na posição 3

num.push(4) // Coloca o número 4 na ultima posição do array

console.log(`Nosso vetor é o ${num}`) // Mostrando o vetor

console.log(`Primeiro número do vetor é ${num[0]}`)

console.log(`Nosso vetor em ordem é ${num.sort()}`) // Coloca em ordem os números

console.log(`O tamanho do array é ${num.length}`) // Conta quantos indices tem em um array

console.log(`${num.indexOf(3)}`) // Aqui eu estou pergutando se tem o valor 3 no array, caso tenho ele vai retornar a posição que ele estar

var pos = num.indexOf(1)
if (pos == -1) {
    console.log(`Posição não foi encontrada!`)
} else {
    console.log(`${num.indexOf(3)}`)
}