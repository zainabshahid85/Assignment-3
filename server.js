const express = require('express')
const route=require('./Route')
const bodyParser=require("body-parser")
const path=require('path')

const app = express()
const port = 3000


app.set("views", path.join(__dirname, "public"));
app.set('view engine', 'ejs')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',route)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})