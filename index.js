const express = require('express');
const app = express()
const PORT = 3000

const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(morgan('dev'))

app.get('/', (req, res) =>{
    res.send("This is our home page")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
