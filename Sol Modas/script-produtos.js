let genero = document.getElementsByName('gen')
genero[0].addEventListener('click', fede())
function fede(){
    for(let generoatual of genero){
        if(generoatual.checked){
            let idgen = generoatual.id
            console.log(idgen)
            if(idgen == 'm'){
                const masc = document.getElementById('masc')
                masc.style.display = 'block'
            } else if(idgen == 'f'){
                const fem = document.getElementById('fem')
                fem.style.display = 'block'
            } else if(idgen == 'i'){
                const inf = document.getElementById('inf')
                inf.style.display = 'block'
            }
        }
    }
}


function MostrarFiltros(){
    const filtro = document.getElementById('filtro')
    const setatop = document.getElementById('seta-top')
    if(filtro.style.maxHeight == '100vh'){
        filtro.style.maxHeight = '0vh'
        filtro.style.padding = '0px'
        setatop.style.transform = 'rotate(-90deg)'
    } else{
        filtro.style.maxHeight = '100vh'
        filtro.style.paddingBottom = '10px'
        setatop.style.transform = 'rotate(90deg)'
    }
}
function MostrarGenero(){
    const genero = document.getElementById('genero')
    const generoh3 = document.getElementById('h3genero')
    const setagenero = document.getElementById('sg')
    if(genero.style.maxHeight == '50vh'){
        genero.style.maxHeight = '0vh'
        generoh3.style.transition = 'border-radius 1.2s'
        generoh3.style.borderRadius = '10px'
        setagenero.style.transform = 'rotate(-90deg)'
    } else{
        genero.style.maxHeight = '50vh'
        generoh3.style.transition = 'border-radius 0.1s'
        generoh3.style.borderRadius = '10px 10px 0px 0px'
        setagenero.style.transform = 'rotate(90deg)'
    }
}
function MostrarTamanho(){
    const tamanho = document.getElementById('tam')
    const tamanhoh3 = document.getElementById('h3tamanho')
    const setatamanho = document.getElementById('sta')
    if(tamanho.style.maxHeight == '50vh'){
        tamanho.style.maxHeight = '0vh'
        tamanhoh3.style.transition = 'border-radius 1.2s'
        tamanhoh3.style.borderRadius = '10px'
        setatamanho.style.transform = 'rotate(-90deg)'
    } else{
        tamanho.style.maxHeight = '50vh'
        tamanhoh3.style.transition = 'border-radius 0.1s'
        tamanhoh3.style.borderRadius = '10px 10px 0px 0px'
        setatamanho.style.transform = 'rotate(90deg)'
    }
}
function MostrarTipo(){
    const tipo = document.getElementById('tipo')
    const tipoh3 = document.getElementById('h3tipo')
    const setatipo = document.getElementById('sti')
    if(tipo.style.maxHeight == '50vh'){
        tipo.style.maxHeight = '0vh'
        tipoh3.style.borderRadius = '10px'
        tipoh3.style.transition = 'border-radius 1.2s'
        setatipo.style.transform = 'rotate(-90deg)'
    } else{
        tipo.style.maxHeight = '50vh'
        tipoh3.style.transition = 'border-radius 0.1s'
        tipoh3.style.borderRadius = '10px 10px 0px 0px'
        setatipo.style.transform = 'rotate(90deg)'
    }
}

function FiltrarTexto(){
    const produto = document.querySelectorAll('#conteudo li')
    const texto = document.getElementById('barra')
    if(texto.value != ''){
        let textofiltrado = texto.value.toLowerCase()
        for(var i = 0; i < produto.length; i++){
            let produtofiltrado = produto[i].querySelector('p')
            produtofiltrado = produtofiltrado.textContent.toLowerCase()
            if(produtofiltrado.includes(textofiltrado)){
                produto[i].style.display = 'block'
            }else{
                produto[i].style.display = 'none'
            }
        }
    } else{
        for(var i = 0; i < produto.length; i++){
            produto[i].style.display = 'block'
        }
    }
}
function FiltrarPor(){

}