function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(' [ERRO] Verifique os dados e tente novamenete')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = (ano - Number(fano.value))
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute('src', 'imagens/criancaM.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovemM.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/velho.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute('src', 'imagens/criancaF.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovemF.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulta.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}