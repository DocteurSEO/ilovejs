/**
Objective : learn function and events

combine the functions to make the following program 

in the HTML, you need
two inputs and a button
one input to put the name of the tags
and another input for the content  
 

when the button is clicked,
 you have to add the tag in the body 

you have to use the functions below
*/




 /**
createHTML returns an new html tag with content
 * @param {string} tags -  .
 * @param {string} content -  . 
 * @return {object}  - DOM element
*/

function createHTML(tags, content) {
     
    return null
}

 /**
addToBody add DOM element to body
 * @param {object} element - a DOM element  .
  
*/

function addToBody(element){
  document.body.appendChild(element);
}

 










































// Validate your code 
import {validation} from './validation.js'
document.getElementById('validateexoahmed').addEventListener('click', ()=> validation(createHTML,addToBody))