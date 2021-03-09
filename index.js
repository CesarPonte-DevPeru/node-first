const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/paginaweb'));

// Estas paginas al mismo nivel / ya no levantan le da preferencia al STATIC
app.get('/', function (req, res) {
  res.send('intro GET')
})

app.post('/', function (req, res) {
    res.send('intro POST')
  })
 
app.delete('/', function (req, res) {
    res.send('intro DELETE')
  })

  // Esta página SI levanta
  app.get('/home', function (req, res) {
    res.send('intro HOME')
  })
    
app.listen(port, () =>{
    console.log(`Server running in Port ${port}`);
});