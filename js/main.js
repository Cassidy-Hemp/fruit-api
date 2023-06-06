document.querySelector('button').addEventListener('click', findFruit)

function findFruit(){
    let fruit = document.querySelector('input').value
    const url = (`http://localhost:8000/api/${fruit}`)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.error(err)
        })
}