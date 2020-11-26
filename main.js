let lista;
let path = "https://raw.githubusercontent.com/barbara06/project_work/master/film.json";
/*$.getJSON("https://raw.githubusercontent.com/barbara06/project_work/master/film.json", function(json) {
    lista = json; */ 
    
// fetch(path)

let divfilm = document.createElement('div');

for (i in lista) {
    
    let film = document.createElement('div');

    let titolo = document.createElement('p');

    titolo.className = "classe css";

    titolo.innerHTML = lista[i].titolo;

    let rating = document.createElement('p');

    rating.className = "classe css";

    rating.innerHTML = lista[i].rating;

    let genere = document.createElement('p');

    genere.className = "classe css";

    genere.innerHTML = lista[i].genere;

    let anno = document.createElement('p');

    anno.className = "classe css";

    anno.innerHTML = lista[i].anno;

    let regia = document.createElement('p');

    regia.className = "classe css";

    regia.innerHTML = lista[i].regia;

    let cast = document.createElement('p');

    cast.className = "classe css";

    cast.innerHTML = lista[i].cast;

    let trama = document.createElement('p');

    trama.className = "classe css";

    trama.innerHTML = lista[i].trama;

    let locandina = document.createElement('p');

    locandina.className = "classe css";

    locandina.innerHTML = lista[i].locandina;

    /* let trailer = document.createElement('p');

    trailer.className = "classe css";

    trailer.innerHTML = lista[i].trailer; */
   


    film.append(titolo);
    film.append(rating);
    film.append(genere);
    film.append(anno);
    film.append(regia);
    film.append(cast);
    film.append(trama);
    film.append(locandina);
    // film.append(trailer);


    divfilm.append(film);



   // lista.film[i].titolo.rating.genere.anno.regia.cast.trama.locandina.trailer;
}

document.getElementById("lista").append(divfilm);