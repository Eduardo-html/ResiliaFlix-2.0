let rg = document.querySelector('#inputRG')
rg.addEventListener('keyup', (event)=>{
    if(!(event.keyCode==8 || event.keyCode==46)){
        if(event.target.value.length==2 || event.target.value.length==6){
            event.target.value += "."
        } else if (event.target.value.length== 10){
            event.target.value += "-"
        }
    }
})