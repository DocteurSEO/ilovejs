document.body.addEventListener('click', function(e){
  
    if(e.target.id == "a"){
        document.querySelector('h1').innerHTML = 'salutation';
    }
   
})