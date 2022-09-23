/**
Objective : Learn to read other people's code

 Sometimes you have to read the code of others
 and fix the bugs
 
 */


const list = document.querySelector('ul')
let posts =[]

if(!window.localStorage.getItem('posts')){
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data =>{
    displayPosts(data)
    window.localStorage.setItem('posts', JSON.stringify(data))
})

}
else{
    displayPosts(JSON.parse(window.localStorage.getItem('posts')))
}

function displyaPosts(data){
    posts = data
    for (post of  data ){
        list.innerHTML += `
            <li><h2>${post.title}</h2>
            <p>${post.body}</p>
            <button class='like btn'>❤ 0</button>
            <button class='delete btn '>Remove</button>
            </li>`
    }
}

// event global 

document.body.addEventListener('click', (e)=>{

   if(e.target.classList.contains('save')){
         const li = e.target.parentElement
         const title = li.querySelector('h2').innerText
         const body = li.querySelector('p').textContent
         const post = {title, body}
         posts = [post,...posts  ]
         window.localStorage.setItem('posts', JSON.stringify(posts))
         li.querySelector('h2').removeAttribute('contentEditable')
         li.querySelector('p').removeAttribute('contentEditable')
        e.target.remove()
   }


    if(e.target.classlist.contains('add')){
        console.log(e.target)
       addPost()
    }
    if(e.target.classList.contain('delete')){
        e.target.parentElement.remove
        posts = posts.filter(function( obj ) {
            const li = e.target.parentElement
          
            return obj.title !=  li.querySelector('h2').innerHTML
        });
        window.localStorage.setItem('posts', JSON.stringify(posts))
         
        
    }

    if(e.target.classList.contains('like')){
        if(e.target.innerHTML == '❤ 0'){
            e.target.innerHTML = '❤ 1'
            e.target.classList.add('active') 
        }else{
            e.target.innerHTML = '❤ 0'
            e.target.classList.remove('active')  
        }
    }
})
 

function addPost (){
    list.innerHTML = `
    <li><h2 contentEditable>title</h2>
    <p contentEditable>content</p>
    <button class='like btn'>❤ 0</button>
    <button class='delete btn '>Remove</button>

    <button class='save btn '>💾</button></li>` +  list.innerHTML
}

 
 
 
 




































 