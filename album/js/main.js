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

        let stato = "";
        if (i==0) {
            stato = "active";
        }

        let film = '<div class="carousel-item col-md-4 ' + stato + '">' +
                    '<div class="card mb-4 shadow-sm">' +
                        '<img src="' + lista[i].locandina + '" class="card-img-top locandina">' +
                        '<div class="card-body sfondoCard">' +
                            '<h5 class="card-title titoloCard">' + lista[i].titolo + '</h5>' + 
                            '<p class="card-text testoCard">' + lista[i].genere + ' (' + lista[i].anno + ')</p>' +
                            '<p class="card-text"><i class="fa fa-star fa-lg stella"></i> ' + lista[i].rating +
                            '<button type="button" class="btn btn-sm btn-outline-secondary float-right scheda" onClick="schedaFilm(' + i + ')">Scheda</button>' +
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
    $('#annoFilm').text(elenco[id].anno);
    $('#regiaFilm').text(elenco[id].regia);
    $('#castFilm').text(elenco[id].cast);
    $('#tramaFilm').html(elenco[id].trama);
    $('#trailerFilm').attr('src', elenco[id].trailer);
    $('#exampleModal').modal('show');
}

$('#carouselExample').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);
    
    var idx = $e.index();   
    var itemsPerSlide = 8;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});

