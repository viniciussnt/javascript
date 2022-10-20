function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#f6b94f'
    }else if(hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#fe9843'
    }else{
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#1F517A'
    }
}
