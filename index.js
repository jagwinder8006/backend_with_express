const express = require('express')
require('dotenv').config()
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!ccccc')
})



app.get('/twitter',(req,res)=>{
    res.send("<h1>hello ji doston ki haal chaal aw  hhghhhg</h1>");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
});

