// let tags = 'div'
// let content = 'vive le js '


// const elm = document.createElement(tags)
// elm.textContent = content
// console.log(elm)
// document.body.append(elm)

 
function createHTML(tags, content) {
const elm = document.createElement(tags)
elm.textContent = content
return elm

}
const text = 'salut'
const div = createHTML('div',text )
addToBody(div)

function addToBody(DomELement){
 document.body.appendChild(DomELement)
}