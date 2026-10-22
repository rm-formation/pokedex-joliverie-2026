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

const mockPokemons = [
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
    }
]

function afficherPokedex() {
    main.innerHTML = "Pokedex";
}

function afficherFavoris() {
    main.innerHTML = "Favoris";
}

function afficherFichePokemon(pokemon:Pokemon) {

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
    type2:string,
    genreEspece:string,
    taille:number,
    poids:number,
    description:string,
};