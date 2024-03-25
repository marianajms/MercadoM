import express from 'express';

const app = express();
const porta = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.render('index.ejs')
})

app.get('/localizacao', (req,res)=>{
  res.render('localizacao.ejs')
})

app.get('/contato', (req,res)=>{
  res.render('contato.ejs')
})

app.listen(porta, (error) => {
    if (error) {
      console.log("Ocorreu um erro");
    } else {
      console.log(`Servidor ativado na porta ${porta}`);
    }
  });