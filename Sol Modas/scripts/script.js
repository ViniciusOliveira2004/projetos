console.log(typeof window.innerWidth)
let navegar = document.getElementById('Nav')
let fundo = document.getElementById('fundo')
let buttomprodutos = document.getElementById('buttomProdutos')
let p = document.getElementById('produtos2')
let pa = document.getElementById('produtos2-absolute')
let simbolo = document.getElementById('left')
function Redimencionar(){
    if(window.innerWidth >= 768){
        if(navegar.style.width == '0vw'){
            navegar.style.width = 'auto'
        } else if(navegar.style.width == '50vw'){
            ClicouMenu()
            navegar.style.width = 'auto'
        }
    } else if(window.innerWidth < 768){
        if(navegar.style.width == 'auto'){
            navegar.style.width = '0vw'
        }
    }
}
function ClicouMenu(){
    if(navegar.style.width > '0vw'){
        navegar.style.width = '0vw'
        p.style.maxHeight = '0vh'
        fundo.style.backgroundColor = 'rgba(0, 0, 0, 0)'
        fundo.style.width = '0vw'

    } else{
        navegar.style.width = '50vw';
        fundo.style.backgroundColor = 'rgba(0, 0, 0, 0.400)'
        fundo.style.width = '100vw'
    }
}
function ClicouProdutos(){
    if(window.innerWidth < 768){
        if(p.style.maxHeight == '100vh'){
            simbolo.style.transform = 'rotate(-90deg)'
            p.style.maxHeight = '0vh'
        } else{
            simbolo.style.transform = 'rotate(90deg)'
            p.style.maxHeight = '100vh'
        }
    } else{
        if(pa.style.maxHeight == '500px'){
            pa.style.maxHeight = '0px'
            pa.style.transition = 'max-height 0.3s, padding 0.4s'
            pa.style.padding = '0px'
            buttomprodutos.style.backgroundColor = 'var(--cor1)'
            buttomprodutos.style.color = 'var(--cor5)'
            buttomprodutos.style.borderRadius = '10px'
            simbolo.style.transform = 'rotate(-90deg)'
        } else{
            pa.style.maxHeight = '500px'
            pa.style.transition = 'max-height 0.3s'
            pa.style.padding = '10px 0px'
            buttomprodutos.style.backgroundColor = 'var(--cor3)'
            buttomprodutos.style.color = 'var(--cor2)'
            buttomprodutos.style.borderRadius = '10px 10px 0px 0px'
            simbolo.style.transform = 'rotate(90deg)'
        }
    }
}
function MoverPage(){
    window.location.href = 'index.html #rodape'
    if(window.innerWidth < 768){
        ClicouMenu()
    }
}