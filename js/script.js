const menu = document.getElementById('hamburguer')
const links = document.getElementById('nav-links-mobile')
const navBar = document.getElementById('nav-bar');

menu.addEventListener('click',(e) => {
    
    if(links.getAttribute('style')==="display: none" || links.getAttribute('style')===null){
        links.setAttribute('style',"display: flex;")
    }else{
        links.setAttribute('style',"display: none")
    }
    
})

links.addEventListener('click',(e) => {
    links.setAttribute('style',"display: none")
})


document.addEventListener('click', function(event) {
    if (!navBar.contains(event.target)) {
        links.setAttribute('style',"display: none")
        
    }
});


