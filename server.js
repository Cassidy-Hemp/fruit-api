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
    'pomegranate':{
        'latinName': 'Punica granatum',
        'season': 'September-November',
        'origin': 'Persia'
    },
    'apple':{
        'latinName': 'Malus',
        'season': 'mid August-mid November',
        'origin': 'Kazakhstan'
    },
    'pineapple':{
        'latinName': 'Ananas comosus',
        'season': 'March-July',
        'origin': 'Argentina, Paraguay and Brazil'
    },
    'banana':{
        'latinName': 'Musa',
        'season': 'year round',
        'origin': 'Malaya Peninsula, Indonesia, the Philippines and New Guinea.'
    },
    'strawberry':{
        'latinName': 'Fragaria × ananassa',
        'season': 'early June-early July',
        'origin': 'Northern Europe and Chile'
    },
    'blueberry':{
        'latinName': 'Vaccinium sect. Cyanococcus',
        'season': 'early July-mid August',
        'origin': 'North America'
    },
    'peach':{
        'latinName': 'Prunus persica',
        'season': 'mid July-late September',
        'origin': 'China'
    },
    'apricot':{
        'latinName': 'Prunus armeniaca',
        'season': 'May-September',
        'origin': 'China'
    },
    'star fruit':{
        'latinName': 'Averrhoa carambola',
        'season': 'August-September and December-February',
        'origin': 'Sri Lanka, the Moluccas, India, and Indonesia'
    },
    'papaya':{
        'latinName': 'Carica papaya',
        'season': 'Year Round!',
        'origin': 'Southern Mexico'
    },
    'pear':{
        'latinName': 'Pyrus',
        'season': 'August-October',
        'origin': 'China and Asia Minor until the Middle East'
    },
    'blackberry':{
        'latinName': 'Rubus subg',
        'season': 'July-August',
        'origin': 'Europe and Asia'
    },
    'cherry':{
        'latinName': 'Prunus avium',
        'season': 'May-August',
        'origin': 'Asia Minor in the fertile areas between the Black and Caspian seas'
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