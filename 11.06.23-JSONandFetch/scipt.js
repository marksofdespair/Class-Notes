window.addEventListener("load", function () {
    this.fetch("https://pokeapi.co/api/v2/pokemon/722").then(function(response)
    {
        response.json().then(funcition(json) {


            console.log(json);
            let pokeName = document.getElementById("pokeName");
            let pokeSprite = document.getElementById("pokeSprite");
            let pokeInfo = document.getElementById("pokeInfo");

            pokeName.innerHTML = `It's {$json.name}!!!`
            pokeSprite.setAttribute("src");

        })
    });
})