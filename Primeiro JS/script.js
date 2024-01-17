let vetor = []
let final = document.getElementById('final')
let select = document.getElementById('resposta')

function Add(){
    let n = document.getElementById('num')
    if(n.value.length == 0){
        window.alert("[ERRO] Digite um Número!!")
    } else{
        n = Number(n.value)
        if(n > 50 || n < 1){
            window.alert('[ERRO] Digite um número entre 1 e 50')
        }else if(InVetor(n) == false){
            window.alert('Este número já foi adicionado')
        }else{
            final.style.display = 'none'
            vetor.push(n)
            var novo = document.createElement('option')
            novo.innerHTML = `Valor ${n} adicionado`
            select.appendChild(novo)
        }
    } 
}
function Finish(){
    if(vetor.length == 0){
        window.alert('Não foram adicionados valores')
    }else{
        final.innerHTML = `<p>1) Foram adicionados ${vetor.length} números</p>`
        let aux = 0
        for(var i = 0; i < vetor.length; i++){
            aux += vetor[i]
        }
        final.innerHTML += `<p>2) A soma de todos os números é ${aux}</p>`
        let media = Number.parseFloat(aux / vetor.length)
        media = media.toFixed(2)
        final.innerHTML += `<p>3) A média dos números é ${media}</p>`
        aux = 51
        for(var i = 0; i < vetor.length; i++){
            if(vetor[i] < aux){
                aux = vetor[i]
            }
        }
        final.innerHTML += `<p>4) O menor valor adicionado é ${aux}`
        aux = 0
        for(var i = 0; i < vetor.length; i++){
            if(vetor[i] > aux){
                aux = vetor[i]
            }
        }
        final.innerHTML += `<p>5) O maior valor adicionado é ${aux}`
        final.style.display = 'block'
    }
}
function InVetor(n){
    if(vetor.indexOf(n) == -1){
        return true
    } else{
        return false
    }
}
function Limpar(){
    vetor = []
    select.innerHTML = ''
    final.style.display = 'none'
}