function ClicouMenu(){
    let navegar = document.getElementById('Nav')
    let fundo = document.getElementById('fundo')
    let p = document.getElementById('produtos2')
    var windowWidth = Number(window.innerWidth);
    var windowHeight = Number(window.innerHeight);
    if(navegar.style.width > '0vw'){
        p.style.maxHeight = '0vh'
        navegar.style.width = '0vw'
        fundo.style.backgroundColor = 'rgba(0, 0, 0, 0)'
        fundo.style.width = '0vw'

    } else{
        if(windowHeight < windowWidth){
            navegar.style.width = '80vh';
        } else{
            navegar.style.width = '50vw';
        }
        fundo.style.backgroundColor = 'rgba(0, 0, 0, 0.400)'
        fundo.style.width = '100vw'
    }
}
function ClicouProdutos(){
    let p = document.getElementById('produtos2')
    if(p.style.maxHeight == '0vh'){
        p.style.maxHeight = '100vh';
    } else{
        p.style.maxHeight = '0vh'
    }
}