window.addEventListener("load", initialisation);

function initialisation() {
    const boutonPokedex:HTMLElement|null = document.querySelector("#boutonPokedex");
    const boutonFavoris:HTMLElement|null = document.querySelector("#boutonFavoris");
    if (!boutonPokedex || !boutonFavoris) {
        throw new Error("boutonPokedex ou boutonFavoris non trouvé");
    }
    boutonPokedex.addEventListener("click", () => { naviguer(Pages.pokedex) });
    boutonFavoris.addEventListener("click", () => { naviguer(Pages.favoris) });
}

function naviguer(page:Pages) {
    console.warn(`Naviguer - Navigation vers ${Pages[page]}`);
}

enum Pages {
    accueil = 1,
    pokedex,
    favoris
}