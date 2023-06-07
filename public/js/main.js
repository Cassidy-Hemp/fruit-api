document.querySelector('button').addEventListener('click', findFruit)

async function findFruit(){
    const fruit = document.querySelector('input').value
    try {
        const response = await fetch(`https://rich-gold-seagull-yoke.cyclic.app/api/${fruit}`)
        const data = await response.json()
        
        console.log(data)
        document.querySelector('#latin').innerHTML = `Latin Name: ` + data.latinName 
        document.querySelector('#season').innerHTML = `In Season: ` + data.season
        document.querySelector('#origin').innerHTML = `Origin: ` + data.origin
    } 
    catch(error){
        console.log(error)
    }
}