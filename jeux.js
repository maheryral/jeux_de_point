
const terrain=document.querySelector('#terrain table')
const champi=document.querySelector('#champ table')

for (let i = 0; i < 18; i++) {
    const tr=document.createElement('tr')
    terrain.appendChild(tr)
    for (let j = 0; j < 34; j++) {
        const td=document.createElement('td')
        tr.appendChild(td)
    }
    
}
for (let i = 1; i < 18; i++) {
    const tr=document.createElement('tr')
    champi.appendChild(tr)
    for (let j = 1; j < 34; j++) {
        const td=document.createElement('td')
        td.id=i+''+j
        td.dataset.l=i //ligne
        td.dataset.c=j //colonne
        td.dataset.jeux=''//joueru
        td.dataset.d='d'//direction
        td.dataset.gau='mahery'
        td.className='chp'
        tr.appendChild(td)
    }
    
}
const champ= document.getElementsByClassName('chp')
var joueur1=document.getElementById('j1').innerHTML;
var joueur2=document.getElementById('j2').innerHTML;
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

function $(id) {
    return document.getElementById(id);
}
function func(y){
    y.style.backgroundColor=couleur
     y.style.transform='scale(1.8,1.8)'
      
            if (pers=='joueur1') {
                pers='joueur2'
                y.dataset.jeux='red'
                couleur='black'
                
            }
            else if (pers=='joueur2') {
                y.dataset.jeux='black'
                pers='joueur1'
                couleur='red'
            }
}
function maty(init,jeux,di) {

    // var mandroso=mandroso()
    // if (mandroso==true) {
    //     if (j.dataset.j='red') {
    //         joueur1=parseInt(joueur1)+1
    //     }
    //     else{
    //         joueur2=parseInt(joueur2)+1
    //     }
    // }
}
function mandroso(init,jeux,di){
    if (di='d') {
        const vald=parseInt(jeux.dataset.c)+1
        if (init.id==jeux.dataset.l+''+vald) {
            return true
        }
        else{
            if (jeux.dataset.jeux==$(jeux.dataset.l+''+vald).dataset.jeux) {
                mandroso(init,$(jeux.dataset.l+''+vald),$($(jeux.dataset.l+''+vald)).dataset.d)
            }
            else{
                jeux.dataset.d='ho'
                mandroso(init,jeux,jeux.dataset.d)
                
            }
        }
        
    }
    else if (di='h') {
        if (init.id==jeux.dataset.l+''+jeux.dataset) {
            return true
        }
        else{
            if (jeux.dataset.jeux==$(jeux.dataset.l+''+jeux.dataset).jeux) {
                mandroso(init,$(jeux.dataset.l+''+jeux.dataset),$(jeux.dataset.l+''+jeux.dataset).dataset.d)
            }
            else{
                jeux.dataset.d='h'
                jeux=$(jeux.dataset.l+''+jeux.dataset)
            }
        }
    }
}
function miverina(){

}
