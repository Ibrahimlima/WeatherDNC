async function getAddressByCep(){
    const cep = document.getElementById('cep').value;
    try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        console.log(data)
        document.getElementById('rua').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('uf').value = data.uf;
    }
    catch(error){
        console.log(error)
    }
}

async function getForecast(){
    const lat= document.getElementById('lat').value;
    const long = document.getElementById('long').value;
    try{
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`);
        const data = await response.json();
        const dataAtual = new Date()
        console.log(data)
        for(let index = 0; index < data.hourly.temperature_2m.length; index++){
            if(data.hourly.time[index] = dataAtual){
                document.getElementById('temp').value = data.hourly.temperature_2m[index]
            }
            
        }
        /*document.getElementById('temp').value = data.logradouro;*/
    }
    catch(error){
        console.log(error)
    }
}




/*-- -51.16451870075153 */
/*-- -30.01642416634016 */