let rg = document.querySelector('#inputRG')
rg.addEventListener('keyup', (event)=>{
    alert(event.key)
    if(!(event.key=='Backspace' || event.key=='Delete')){
        if(event.target.value.length==2 || event.target.value.length==6 ){
            event.target.value += "."
        } else if (event.target.value.length== 10){
            event.target.value += "-"
        }
    }
})