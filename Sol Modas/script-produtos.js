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
        generoh3.style.transition = 'border-radius 0.6s'
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
        tamanhoh3.style.transition = 'border-radius 0.6s'
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
        tipoh3.style.transition = 'border-radius 0.6s'
        setatipo.style.transform = 'rotate(-90deg)'
    } else{
        tipo.style.maxHeight = '50vh'
        tipoh3.style.transition = 'border-radius 0.1s'
        tipoh3.style.borderRadius = '10px 10px 0px 0px'
        setatipo.style.transform = 'rotate(90deg)'
    }
}