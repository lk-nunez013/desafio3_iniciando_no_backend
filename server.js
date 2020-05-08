const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false
})

server.get("/", function(require, response){
  const about = {
    avatar_url:"https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/94404581_3026305420782671_5276380439966121984_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_eui2=AeEckVysnXmX_H3UQdyPLm5zoQrA80p36QGhCsDzSnfpAbwUvRh1frtfMjZfejw5dwsV6CSZE_vbvTcL-J7Xz1op&_nc_ohc=LSyPSADfKN8AX_q0dp2&_nc_ht=scontent-gru2-1.xx&oh=82e7cd471fd4a34d1f49fc30e7e930ae&oe=5ED75682",
    name:"Lucas Dos Santos",
    role:"Vocalista do Grupo T.A.S Sobreaviso",
    description:"Desde os 9 anos faz parte do grupo, Lucas possui skills de R&B, flipada, punchline, speedflow."
  }
  return response.render("about", { about })
})

server.get("/portifolio", function(require, response){
  return response.render("portifolio", {items:videos})
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.listen(5000, function(){
  console.log('server is running')
})

