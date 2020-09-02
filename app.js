const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended : true
}))
app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
  res.render('index')
})

app.get('/loginJugador', (req,res) =>{
  res.render('loginJugador')
})

app.get('/loginModerador', (req,res) =>{
  res.render('loginModerador')
})
app.post('/loginJugador',(req,res)=>{
  const _idgame = req.body._idgame
  const username = req.body.playername
  const userteam = req.body.userteam
  console.log(_idgame);
  res.redirect("/idgame/" + _idgame)
})
app.get('/vistaJugador', (req,res) =>{
  res.render('vistaJugador')
})

app.get('/idgame/:_idgame', (req,res)=>{
  const game = req.params._idgame
  res.json({jugador : "ROJO"})
})

app.get('/vistaModerador', (req,res) =>{res.render('vistaModerador')})

app.listen(8080, ()=>{
  console.log('Listenning on port 8080')
})
