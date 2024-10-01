const express = require ("express");
const path = require ("path");
const app = express();


// Configura o Express para servir arquivos estáticos (CSS, JS, imagens) da pasta 'public'.
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "views", "index.html")); // Envia o arquivo index como resposta apos o acesso 
});


const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`servidor esta rodando na posta ${PORT}`)
})