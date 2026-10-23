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

    document.querySelector("footer")?.addEventListener("click", dinosaure);
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

function dinosaure() {
    const horizontalSpeed = 4;
    const gravity = 7;
    const jumpVelocity = 20;
    let debug = false;
    const pikachu = {
        div: document.createElement("div") as HTMLElement,
        y: 0,
        velocityY: 0
    };

    main.innerHTML = "";
    
    const conteneur = document.createElement("div");
    conteneur.classList.add("conteneurDinosaure");
    conteneur.innerHTML = `
        <div class="pikachu">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/25.png">
            <div class="hitbox"></div>
        </div>
        <div class="sol"></div>
        <div class="gameOverText">Game Over</div>
    `;
    pikachu.div = conteneur.querySelector(".pikachu")! as HTMLElement;
    conteneur.style.setProperty("--horizontalSpeed", `${horizontalSpeed}s`);
    main.append(conteneur);
    setTimeout(() => {
        conteneur.style.setProperty("--conteneurWidth", `${conteneur.getBoundingClientRect().width}px`);
    })

    

    const keydownListener = (e:KeyboardEvent) => {
        // console.log(`Keydown e.key:${e.key} e.keycode:${e.keyCode} e.code:${e.code}`);
        if (e.key === ' ') {
            if (pikachu.y === 0) {
                pikachu.velocityY = jumpVelocity;
            }
        }
        if (e.key === 'Escape') {
            gameOver();
        }
        if (e.key === 'r') {
            gameOver();
            dinosaure();
        }
        if (e.key === 'd') {
            debug = !debug;
            conteneur.classList.toggle("debug");
        }
    }
    document.addEventListener("keydown", keydownListener);
    
    let isGameOver = false;
    let frameCount = 0;
    let timeouts:Array<number> = [];
    let movingItems:Set<HTMLDivElement> = new Set();
    let liveItems:Set<HTMLDivElement> = new Set();
    let nextCaillou = 5;
    let nextCactus = 240;
    const dinosaureLoop = () => {
        if (isGameOver) {
            return;
        }
        frameCount++;

        pikachu.y += pikachu.velocityY;
        pikachu.velocityY -= 1;
        if (pikachu.velocityY < 0) {
            pikachu.velocityY = 0;
        }

        pikachu.y -= gravity;
        if (pikachu.y < 0) {
            pikachu.y = 0;
        }

        pikachu.div.style.setProperty("--y", `${pikachu.y}px`);
        const pikachuRect = pikachu.div.querySelector(".hitbox")!.getBoundingClientRect();
        for (let item of liveItems) {
            const itemRect = item.getBoundingClientRect();
            const leftIn = itemRect.left < pikachuRect.right && itemRect.left > pikachuRect.left;
            const rightIn = itemRect.right > pikachuRect.right && itemRect.right < pikachuRect.left;
            const topIn = pikachuRect.bottom > itemRect.top;
            if ((leftIn || rightIn) && topIn) {
                gameOver();
                return;
            }            
        }

        if (frameCount === nextCaillou) {
            const caillou = creerCaillou();
            movingItems.add(caillou);
            conteneur.append(caillou);
            timeouts.push(setTimeout(() => {
                caillou.remove();
                movingItems.delete(caillou);
            }, horizontalSpeed * 1000));
            nextCaillou = getRandomNextFrame(60, 120);
            debug && console.log(`Next caillou in ${nextCaillou - frameCount} frames (frameCount ${nextCaillou})`);
        }

        if (frameCount === nextCactus) {
            const cactus = creerCactus();
            liveItems.add(cactus);
            movingItems.add(cactus);
            conteneur.append(cactus);
            timeouts.push(setTimeout(() => {
                cactus.remove();
                liveItems.delete(cactus);
                movingItems.delete(cactus);
            }, horizontalSpeed * 1000));
            nextCactus = getRandomNextFrame(50, 200);
            debug && console.log(`Next cactus in ${nextCactus - frameCount} frames (frameCount ${nextCactus})`);
        }

        setTimeout(() => {
            requestAnimationFrame(dinosaureLoop);
        }, 16);

    };

    requestAnimationFrame(dinosaureLoop);

    function gameOver() {
        isGameOver = true;
        conteneur.classList.add("gameOver");
        for (const timeout of timeouts) {
            clearTimeout(timeout);
        }
        document.removeEventListener("keydown", dinosaureLoop);
    }

    function creerCaillou() {
        const caillou = document.createElement("div");
        caillou.classList.add("caillou");
        return caillou;
    }

    function creerCactus() {
        const cactus = document.createElement("div");
        cactus.classList.add("cactus");
        cactus.style.setProperty("--height", `${getRandomCapped(1,5)}rem`);
        return cactus;
    }

    function getRandomNextFrame(min:number, max:number) {
        return getRandomCapped(min + frameCount, max + frameCount);
    }

    function getRandomCapped(min:number, max:number) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }
}