var filmes = [];

function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector("#filme");
  var filmeFavorito = campoFilmeFavorito.value;
  if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".png")) {
    var existe = false;
    for (var i = 0; i < filmes.length; i++) {
      if (filmeFavorito == filmes[i]) {
        existe = true;
      }
    }
    if (existe == false) {
      listarFilmesNaTela(filmeFavorito);
      filmes.push(filmeFavorito);
    } else {
      alert("Filme já registrado");
    }
  } else {
    alert("imagem invalida");
  }
  campoFilmeFavorito.value = "";
}

function listarFilmesNaTela(filme) {
  var listaFilme = document.querySelector("#listaFilmes");
  var elementoFilme = "<img src=" + filme + ">";
  listaFilme.innerHTML = listaFilme.innerHTML + elementoFilme;
}
