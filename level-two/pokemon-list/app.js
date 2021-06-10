const pokemon = new XMLHttpRequest();

pokemon.open("GET", "https://api.vschool.io/pokemon", true);
pokemon.send()

pokemon.onreadystatechange = function () {
    if (pokemon.readyState === 4 && pokemon.status === 200){
        const JSONdata = pokemon.responseText
        const data = JSON.parse(JSONdata)
        pokemonList(data.objects[0].pokemon)

        console.log(data.objects[0].pokemon)
        console.log(typeof data)
    }
}

function pokemonList(arr){
    for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement("h1")
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
    }
}