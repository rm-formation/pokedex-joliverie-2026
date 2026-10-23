window.addEventListener("load", initialisation);

let main:HTMLElement;

function initialisation() {
    const localMain:HTMLElement|null = document.querySelector("main");
    if (!localMain) {
        throw new Error("main non trouvé");
    }
    main = localMain;
    const boutonAccueil:HTMLElement|null = document.querySelector("#boutonAccueil");
    const boutonPokedex:HTMLElement|null = document.querySelector("#boutonPokedex");
    const boutonFavoris:HTMLElement|null = document.querySelector("#boutonFavoris");
    if (!boutonAccueil || !boutonPokedex || !boutonFavoris) {
        throw new Error("boutonAccueil, boutonPokedex ou boutonFavoris non trouvé");
    }
    boutonAccueil.addEventListener("click", () => { naviguer(Pages.accueil) });
    boutonPokedex.addEventListener("click", () => { naviguer(Pages.pokedex) });
    boutonFavoris.addEventListener("click", () => { naviguer(Pages.favoris) });

    naviguer(Pages.accueil);
}

function naviguer(page:Pages) {
    switch(page) {
        case Pages.accueil:
            afficherAccueil();
            return;
        case Pages.pokedex:
            afficherPokedex();
            return;
        case Pages.favoris:
            afficherFavoris();
            return;
    }
}

enum Pages {
    accueil = 1,
    pokedex,
    favoris
}

function afficherAccueil() {
    main.innerHTML = `
        <div class="animPokeball">
            <div class="pokeballContainer">
                <div class="pokeball"></div>
            </div>
        </div>
    `;
}

function afficherPokedex() {
    main.innerHTML = "";

    const conteneur = document.createElement("div");
    conteneur.classList.add("conteneurListe");

    for (let pokemon of mockPokemons) {
        const divPokemon = document.createElement("div");
        divPokemon.classList.add("divPokemonListe");
        // divPokemon.innerHTML = `
        //     <img src="${pokemon.urlImage}">
        //     <span>${pokemon.nom}</span>
        //     <span>${pokemon.id}</span>
        // `;

        // const img = document.createElement("img");
        // img.src = pokemon.urlImage;
        // divPokemon.append(img);
        // const spanNom = document.createElement("span");
        // spanNom.innerText = pokemon.nom;
        // divPokemon.append(spanNom);
        // const spanId = document.createElement("span");
        // spanId.innerText = pokemon.id.toString();
        // divPokemon.append(spanId);

        divPokemon.innerHTML = `
            <img src="">
            <span></span>
            <span></span>
        `;

        divPokemon.querySelector("img")!.src = pokemon.urlImage;
        divPokemon.querySelector("span")!.innerText = pokemon.nom;
        (divPokemon.querySelector("span:last-child")! as HTMLElement).innerText = pokemon.id.toString();

        divPokemon.addEventListener("click", function() {
            afficherFichePokemon(pokemon);
        });

        conteneur.append(divPokemon);
    }

    main.append(conteneur);
}

/*
<div class="conteneurListe">
    <div class="divPokemonListe">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/25.png">
        <span>Pikachu</span>
        <span>25</span>
    </div>
</div>
*/

function afficherFavoris() {
    main.innerHTML = "Favoris";
}

function afficherFichePokemon(pokemon:Pokemon) {
    main.innerHTML = `Fiche Pokemon ${pokemon.nom}`;
}

type Pokemon = {
    id:number,
    nom:string,
    urlImage:string,
    pv:number,
    attaque:number,
    defense:number,
    vitesse:number,
    special:number,
    type1:string,
    type2:string|null,
    genreEspece:string,
    taille:number,
    poids:number,
    description:string,
};

const mockPokemons:Array<Pokemon> = [
    {
        id: 1,
        nom: "Bulbizarre",
        urlImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/1.png",
        pv: 35,
        attaque: 55,
        defense: 40,
        vitesse: 50,
        special: 50,
        type1: "electric",
        type2: null,
        genreEspece: "Pokémon Souris",
        taille: 4,
        poids: 60,
        description: "Pikachu a de petites poches pleines d’électricité sur\nses joues. S’il se sent menacé, il laisse s’échapper\ndes décharges électriques."
    },
    {
        id: 4,
        nom: "Salamèche",
        urlImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/4.png",
        pv: 35,
        attaque: 55,
        defense: 40,
        vitesse: 50,
        special: 50,
        type1: "electric",
        type2: null,
        genreEspece: "Pokémon Souris",
        taille: 4,
        poids: 60,
        description: "Pikachu a de petites poches pleines d’électricité sur\nses joues. S’il se sent menacé, il laisse s’échapper\ndes décharges électriques."
    },
    {
        id: 7,
        nom: "Carapuce",
        urlImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/7.png",
        pv: 35,
        attaque: 55,
        defense: 40,
        vitesse: 50,
        special: 50,
        type1: "electric",
        type2: null,
        genreEspece: "Pokémon Souris",
        taille: 4,
        poids: 60,
        description: "Pikachu a de petites poches pleines d’électricité sur\nses joues. S’il se sent menacé, il laisse s’échapper\ndes décharges électriques."
    },
    {
        id: 25,
        nom: "Pikachu",
        urlImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/25.png",
        pv: 35,
        attaque: 55,
        defense: 40,
        vitesse: 50,
        special: 50,
        type1: "electric",
        type2: null,
        genreEspece: "Pokémon Souris",
        taille: 4,
        poids: 60,
        description: "Pikachu a de petites poches pleines d’électricité sur\nses joues. S’il se sent menacé, il laisse s’échapper\ndes décharges électriques."
    },
    {
        id: 150,
        nom: "Mewtwo",
        urlImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/150.png",
        pv: 35,
        attaque: 55,
        defense: 40,
        vitesse: 50,
        special: 50,
        type1: "electric",
        type2: null,
        genreEspece: "Pokémon Souris",
        taille: 4,
        poids: 60,
        description: "Pikachu a de petites poches pleines d’électricité sur\nses joues. S’il se sent menacé, il laisse s’échapper\ndes décharges électriques."
    },
    {
        id: 151,
        nom: "Mew",
        urlImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/151.png",
        pv: 35,
        attaque: 55,
        defense: 40,
        vitesse: 50,
        special: 50,
        type1: "electric",
        type2: null,
        genreEspece: "Pokémon Souris",
        taille: 4,
        poids: 60,
        description: "Pikachu a de petites poches pleines d’électricité sur\nses joues. S’il se sent menacé, il laisse s’échapper\ndes décharges électriques."
    }
];