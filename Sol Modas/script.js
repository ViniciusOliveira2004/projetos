function ClicouMenu(){
    let divnav = document.getElementById('div-nav');
    let nav = document.getElementById('Nav');
    let fundo = document.getElementById('fundo')
    if(divnav.style.display == "flex"){
        divnav.style.display = "none";
        nav.style.display = "none";
        fundo.style.backgroundColor = "rgba(0, 0, 0, 0)"
    } else{
        divnav.style.display = "flex";
        nav.style.display = "inline-block";
        fundo.style.backgroundColor = "rgba(0, 0, 0, 0.400)"
    }
}
function ClicouProdutos(){
    let p = document.getElementById('produtos2');
    if(p.style.display == "block"){
        p.style.display = "none";
    } else{
        p.style.display = "block";
    }
}