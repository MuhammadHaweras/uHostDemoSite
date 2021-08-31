let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let allButtons = document.querySelectorAll('.plans button')
let toggleButton = document.querySelector('.toggle-button')
let sidebar = document.querySelector('.mobile-nav')
for (let index = 0; index < allButtons.length; index++) {
    allButtons[index].addEventListener('click', function() {
        modal.style.display='block'
        backdrop.style.display='block'
        
    })
    
}

backdrop.addEventListener('click',function(){
    sidebar.style.display='none';
    closeModal();
})
if(modal){
    modal.addEventListener('click',closeModal);
}


function closeModal() {
    if(backdrop){
        
        backdrop.style.display='none'
    }
   
    modal.style.display='none'
    
}
toggleButton.addEventListener('click',function() {
    sidebar.style.display='block';
    backdrop.style.display='block';
    
    
})