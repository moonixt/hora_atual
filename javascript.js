function carregar() {
    var texto1 = window.document.getElementById('texto1')
    var img = window.document.getElementById('foto1')
    var data = new Date()
    var hora = data.getHours()
    texto1.innerHTML = `Agora são ${hora} horas.` 
    if (hora >= 0 && hora < 12) {
    //Bom dia
    img.src = './Imagens/manha.jpg'
    document.body.style.background = '#322f30' 
    texto1.innerHTML = `Agora são exatamente ${hora}h da manhã.` 

} else if (hora >= 12 && hora < 18) {
    img.src = './imagens/tarde.jpg'
    document.body.style.background = '#a96854'
    texto1.innerHTML = `Agora são exatamente ${hora}h da tarde.` 

    //Boa tarde
} else {
    img.src = './imagens/noite.jpg'
    document.body.style.background = '#04728f'
    texto1.innerHTML = `Agora são exatamente ${hora}h da noite.` 

    //Boa noite
}
}
