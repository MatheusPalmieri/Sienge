(function(){
    var table = document.querySelector("tbody")

    for(var x = 0; x <= 10; x++){
        table.innerHTML = 
        ` 
            <th>
                <label for=f[${x}]fg${x}>Função ${x}</label>
                <input type="checkbox" id="f[${x}]fg${x}">
            </th>
            <th>
                <label for=f[${x}]fg${x}>Função ${x}</label>
                <input type="checkbox" id="f[${x}]fg${x}">
            </th>
            <th>
                <label for=f[${x}]fg${x}>Função ${x}</label>
                <input type="checkbox" id="f[${x}]fg${x}">
            </th>
            <th>
                <label for=f[${x}]fg${x}>Função ${x}</label>
                <input type="checkbox" id="f[${x}]fg${x}">
            </th>
        `
    }

})()