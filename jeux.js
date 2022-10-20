const champ= document.getElementsByClassName('chp')
var couleur='red'
var pers='joueur1'
for (let i = 0; i < champ.length; i++) {
        
    champ[i].addEventListener('click',function () {
        func(this)
    })
    
}
function remove(z) {
    z.removeEventListener('click',func())
    
}


function func(y){
    y.style.backgroundColor=couleur
     y.style.transform='scale(1.8,1.8)'  
            if (pers=='joueur1') {
                pers='joueur2'
                couleur='black'
                
            }
            else if (pers=='joueur2') {
                pers='joueur1'
                couleur='red'
            }
}
