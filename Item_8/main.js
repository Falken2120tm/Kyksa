/*=============== 1 ===============*/

let dataNew = new Date()
console.log(dataNew.getDate()) 

console.log("====================================================")

/*=============== 2 ===============*/

console.log(dataNew.getMonth()+1)

console.log("====================================================")

/*=============== 3 ===============*/

const options = {
    weekday: 'long',
    day: "numeric", 
    month: "long",
    year: "numeric"
}

const div = document.querySelector('div')
div.innerHTML = dataNew.toLocaleString("uk-UA", options)

divRave = div.textContent
arreyRave = divRave.split("",6)
stringRave = ""

for (let i = 0; i < arreyRave.length; i++) {
    stringRave += arreyRave[i]
}

if(stringRave == "неділя" || stringRave == "субота"){
    div.style.color="red"
}
