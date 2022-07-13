function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora <= 5) {
        // Boa madrugada!
        img.src = 'imagens/madrugada.jpg'
        document.body.style.background = '#292828'
    } else if (hora <= 12) {
        // Bom dia!
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora <= 18) {
        // Boa tarde!
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // Boa noite!
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#515154'
    }
 }
