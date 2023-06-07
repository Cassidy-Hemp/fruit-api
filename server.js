const express = require('express')
const app = express();
const cors = require('cors');
const PORT = 8000;
const fs = require('fs');
const http = require('https');

app.use(cors())

let fruits = {
    'mango':{
        'latinName': 'Mangifera indica',
        'season': 'May-September',
        'origin': 'India'
    },
    'orange':{
        'latinName': 'Citrus sinensis',
        'season': 'December-March',
        'origin': 'Southeast China'
    },
    'unknown fruit':{
        'latinName': 'unknown',
        'season': 'unknown',
        'origin': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.use(express.static("public"))

app.get('/api/:name', (req,res) => {
    const fruitName = req.params.name.toLowerCase()
    if (fruits[fruitName]){
        res.json(fruits[fruitName])
    }
    else{
        res.json(fruits['unknown fruit'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on ${PORT}`)
})