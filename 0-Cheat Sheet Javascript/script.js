 
// string literal
let obj = {
    name: 'js'
}
console.log(obj.name ) // Résultat : js 
console.log(obj['name']) // Résultat similaire : js  



// destructuring
let code = {
    text: 'vive le js '
}

const { text } = code
console.log(text) // Résultat : vive le js


// spread operator

let humain = {
    age:23, 
    code: 'js', 
      
}

let Ahmed = {...humain, job:'formateur'}
console.log(Ahmed) // Résultat : {age: 23, code: 'js', job: 'formateur'}



// map 

console.log([1, 2, 3].map(n => n + 1)) // Résultat : [2, 3, 4]


// filter 
console.log([1, 2, 3].filter(n => n > 1)) // Résultat : [2, 3]


// sort 
console.log([3, 1, 2].sort()) // Résultat :  [1, 2, 3]


// createElement
const ELEMENT_HTML = document.createElement("div")

// add some color 
ELEMENT_HTML.style.color = "pink"

// add class 
ELEMENT_HTML.classList.add(".maClass")

// add some text 
ELEMENT_HTML.innerHTML = "<div>coucou</div>"

// select element in the document
document.querySelector("#mon-id")

// click Event 
ELEMENT_HTML.addEventListener("click", (e) => {

})


// slice
let arr = [1, 2, 3]
console.log(arr.slice(0, 1)) // Résultat : 1
 

// split 
console.log("un-deux".split("-")) // Résultat : ["un", "deux"]


// join 
let result = ["un", "deux"]
result.join("@")// Résultat : "un@deux"



// splice
let tableau = ["a", "b", "c"]
console.log(tableau.splice(0, 1)) // Résultat : 'a'
console.log(tableau ) //  ['b', 'c']

// fetch 
fetch("url")
.then(res => res.json())
.then(data => console.log(data)) 
 
