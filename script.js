var input = document.querySelectorAll('input[type = "checkbox"]')

var btn = document.getElementById('btn')
    btn.addEventListener('click', function(){
        activeCheckbox()
    })


function getSetor() {
    var option = document.getElementById('setor').value
    var definedSetor

    switch(option){
        case 'comercial':
            definedSetor = [0, 1, 4]
            break
        
        case 'obras':
            definedSetor = [0, 3]
            break
        
        case 'engenharia':
            definedSetor = [2, 4]
            break
        default:
            console.log("error")
    }
    return definedSetor
}  

function activeCheckbox() {
    getSetor().forEach(function(element, index, array){
        
        console.log("a[" + index + "] = " + element);
    
        for(var x = 0; x <=input.length; x++){
            document.getElementById('f['+element+']fg'+element+'').checked = true
        }
    })
    console.log("========");
}


