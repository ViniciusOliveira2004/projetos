const listagenero = document.querySelectorAll('#genero > ul > li > label > input')
const listatamanho = document.querySelectorAll('#tam > ul > li > input')
const conteudo = document.querySelectorAll('#conteudo > ul > li')

let masc  = document.getElementById('masc')
let fem  = document.getElementById('fem')
let inf  = document.getElementById('inf')
let select
function SelecionaTipo(){
    for(let type of listagenero){
        if(type.checked){
            if(type.id == 'Masculino'){
                masc.style.display = 'block'
                fem.style.display = 'none'
                Desmarca(document.querySelectorAll('#fem li > input'))
                inf.style.display = 'none'
                Desmarca(document.querySelectorAll('#inf li > input'))
                select = masc.id
            }else if(type.id == 'Feminino'){
                masc.style.display = 'none'
                Desmarca(document.querySelectorAll('#masc li > input'))
                fem.style.display = 'block'
                inf.style.display = 'none'
                Desmarca(document.querySelectorAll('#inf li > input'))
                select = fem.id
            }else if(type.id == 'Infantil'){
                masc.style.display = 'none'
                Desmarca(document.querySelectorAll('#masc li > input'))
                fem.style.display = 'none'
                Desmarca(document.querySelectorAll('#fem li > input'))
                inf.style.display = 'block'
                select = inf.id
            }
            break
        }
    }
}
function Desmarca(lista){
    for(let element of lista){
        element.checked = 0
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
    for(let i of conteudo){
        i.style.display = 'none'
    }
    let elemento = ''
    //Filtrando Genero
    for(elemento of listagenero){
        if(elemento.checked){
            FiltrarGenero(elemento.id)
            break
        }
    }
    let listatipo = document.querySelectorAll(`#${select} > ul > li > input`)
    console.log(listatipo)
    //Filtrando Tamanho
    let marcado = []
    for(elemento of listatamanho){
        if(elemento.checked){
           marcado.push(elemento.id)
        }
    }
    if(marcado.length != 0){
        FiltrarClasse(marcado)
    }

    //Filtrar Tipo de Roupa
    marcado = []
    for(elemento of listatipo){
        if(elemento.checked){
            console.log(elemento.className)
            marcado.push(elemento.className)
        }
    }
    if(marcado.length != 0){
        FiltrarClasse(marcado)
    }
}

function FiltrarGenero(classe){
    for(let product of conteudo){
        if(product.className.includes(classe)){
            product.style.display = 'block'
        } else{
            product.style.display = 'none'
        }
    }
}
function FiltrarClasse(classesmarcadas){
    for(let product of conteudo){
        let possui = 0
        if(product.style.display == 'block'){
            for(let classei of classesmarcadas){
                if(product.className.includes(classei)){
                    possui++
                }
            }
            if(possui == 0){
                product.style.display = 'none'
            }
        } 
    }
}