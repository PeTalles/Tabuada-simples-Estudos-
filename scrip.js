function calculo(){
    var numero = document.getElementById('num')
    var tab = document.getElementById('selt')
    var res = document.getElementById('res')
    if(numero.value == 0){
        res.innerHTML='ERRO'
        
        
    }else{ 
        var n = Number(numero.value)
        var c = 1
        tab.innerHTML =''
        while(c<=10){
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c++

        }
    }
    

    
        
    

}