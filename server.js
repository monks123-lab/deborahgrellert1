const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'arturmonks@gmail.com',  // Seu e-mail
    pass: 'utaecesparlvsmt'             // Sua senha de app
  }
});

transport.sendMail({
  from: 'Manual do Dev <arturmonks@gmail.com>',
  to: 'arturmonks@gmail.com',
  subject: 'Enviando email com Nodemailer',
  html: '<h1>Olá, Dev!</h1> <p>Esse email foi enviado usando o Nodemailer</p>',
  text: 'Olá, Dev! Esse email foi enviado usando o Nodemailer'
})
.then(() => console.log('Email enviado com sucesso!'))
.catch((err) => console.log('Erro ao enviar email: ', err));



// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
