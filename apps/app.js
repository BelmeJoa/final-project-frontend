const APICHARACTERS = fetch("https://rickandmortyapi.com/api/character")
APICHARACTERS.then((dato)=>{
    return dato.json()
}).then((dato)=>{
    let characters = dato.results
    console.log(characters)
    let $container = document.getElementById("container")
    for(let i=0;i< characters.length; i++){
        $container.innerHTML += `
        <div class="card">
                    <div class="image-card"> <img src="${characters[i].image}" alt="Rick-image"></div>
                    <div class="info-card">
                        <h4>${characters[i].name}</h4>
                        <h5>Species: ${characters[i].species}</h5>
                        <h5>Location: ${characters[i].location.name}</h5>
                        <h5>Status: ${characters[i].status} </h5>
                    </div>
                </div>`
    }
})