const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended : true;
}))
app.set('view engine', 'ejs')
