const express = require('express');
const app = express();

////////////////////////////////
// chamar paginas html html
const path = require('path');
const router = express.Router();
////////////////////////////////


app.get('/', function (req, res) {
    //chamar paginas html
    res.sendFile(path.join(__dirname + '/index.html'));
    /*res.send("Homepage do site (rota principal")*/
});


app.get('/sobre', function (req, res) {
    //chamar paginas html
    res.sendFile(path.join(__dirname + '/sobre.html'));
    /*res.send("Pagina sobre o site(rota secundaria)");*/
});


app.get('/news', function (req, res) {
    //chamar paginas html
    res.sendFile(path.join(__dirname + '/news.html'));
    /*res.send("Pagina news do site (rota secundaria")*/
});


app.get('/projetos', function (req, res) {
    //chamar paginas html
    res.sendFile(path.join(__dirname + '/projetos.html'));
    /*res.send("Pagina projetos do site (rota secundaria)")*/
});


app.get('/parceiros', function (req, res) {
    //chamar paginas html
    res.sendFile(path.join(__dirname + '/parceiros.html'));
    /*res.send("Pagina parceiros do site (rota secundaria)")*/
});


app.get('/blog', function (req, res) {
    //chamar paginas html
    res.sendFile(path.join(__dirname + '/blog.html'));
    /*res.send("Pagina blog do site (rota secundaria)")*/
});

////////////////////////////////////////////////////////////////
//parametros
app.get('/parametros/:nome/:idade', function (req, res,) {
    //chamando parametros
    res.send("<h3>Ola </h3>" + req.params.nome + ", voce tem " + req.params.idade + " anos de idade.");
});
// res.send(`<h3>Ola </h3> ${req.params.nome} voce tem ${req.params.idade} anos de idade.`)






//Rodar na porta escolhida (8094)
app.listen(8094, function () {
    console.log("Express server listening on port 8094");
});