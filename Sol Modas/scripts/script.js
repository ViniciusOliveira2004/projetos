function ClicouMenu(){
    let navegar = document.getElementById('Nav')
    let fundo = document.getElementById('fundo')
    let p = document.getElementById('produtos2')
    let simbolo = document.getElementById('left')
    if(navegar.style.width > '0vw'){
        navegar.style.minWidth = '0px'
        simbolo.style.transform = 'rotate(90deg)'
        p.style.maxHeight = '0vh'
        navegar.style.width = '0vw'
        fundo.style.backgroundColor = 'rgba(0, 0, 0, 0)'
        fundo.style.width = '0vw'

    } else{
        navegar.style.minWidth = '250px'
        navegar.style.width = '50vw';
        fundo.style.backgroundColor = 'rgba(0, 0, 0, 0.400)'
        fundo.style.width = '100vw'
    }
}
function ClicouProdutos(){
    let p = document.getElementById('produtos2')
    let simbolo = document.getElementById('left')
    if(p.style.maxHeight == '100vh'){
        simbolo.style.transform = 'rotate(-90deg)'
        p.style.maxHeight = '0vh'
    } else{
        simbolo.style.transform = 'rotate(90deg)'
        p.style.maxHeight = '100vh'
    }
}
function MoverPage(){
    window.scrollTo(0, document.body.scrollHeight)
    ClicouMenu()
}