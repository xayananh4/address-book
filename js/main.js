// load event listener 
window.addEventListener("load", function () {

let addToDoButton = document.querySelector("button#addToDo");
let toDoContainerSection = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(event) {
   
    var paragraphElement = document.createElement('p');
    
    paragraphElement.classList.add('paragraph-styling');
    
    paragraphElement.innerText = inputField.value;
    
    toDoContainerSection.appendChild(paragraphElement);
    
    inputField.value = "";
    
    paragraphElement.addEventListener('click', function(event){  
        paragraphElement.style.textDecoration = "line-through";
           
    })
    
    paragraphElement.addEventListener('dblclick', function(){
        
        toDoContainerSection.removeChild(paragraphElement);
    })
 
 event.preventDefault();   

})
});