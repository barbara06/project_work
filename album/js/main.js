let elenco = "";
fetch('https://raw.githubusercontent.com/barbara06/project_work/master/film.json')
    .then(
        function(response) {
            if (response.status !== 200) {
                alert("File non raggiungibile");
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
                elenco = data.film;
                creaLista(elenco);
            });
        }
    )

function creaLista(lista) {
    for (let i = 0; i < lista.length; i++) {
        let film = '<div class="col-md-4">' +
                    '<div class="card mb-4 shadow-sm">' +
                        '<img src="' + lista[i].locandina + '" class="card-img-top locandina">' +
                        '<div class="card-body">' +
                            '<h5 class="card-title">' + lista[i].titolo + '</h5>' + 
                            '<p class="card-text">' + lista[i].genere + ' (' + lista[i].anno + ')</p>' +
                            '<p class="card-text"><i class="fa fa-star fa-lg stella"></i> ' + lista[i].rating +
                            '<button type="button" class="btn btn-sm btn-outline-secondary float-right" onClick="schedaFilm(' + i + ')">Scheda</button>' +
                            '</p>' +
                        '</div>' +
                    '</div>' +
                    '</div>';




        $("#listaFilm").append(film);

    }
}

function schedaFilm(id) {
    $('#titoloFilm').text(elenco[id].titolo);
    $('#locandinaFilm').attr('src', elenco[id].locandina);
    $('#ratingFilm').text(elenco[id].rating);
    $('#genereFilm').text(elenco[id].genere);
    $('#annofilm').text(elenco[id].anno);
    $('#regiaFilm').text(elenco[id].regia);
    $('#castFilm').text(elenco[id].cast);
    $('#tramaFilm').html(elenco[id].trama);
    $('#trailerFilm').attr('src', elenco[id].trailer);
    $('#exampleModal').modal('show');
}