
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
        td.dataset.pd=''//previouws direction
        td.dataset.nd='d'//next direction
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
      
            if (couleur=='red') {
                couleur='black'
                y.dataset.jeux='red'
                
                teste=mandroso(y,y,'red',y.dataset.pd,y.dataset.nd)
                if (teste==true) {
                    alert('bien mena e')
                }
                
            }
            else  {
                
                y.dataset.jeux='black'
                couleur='red'
                teste=mandroso(y,y,'black',y.dataset.pd,y.dataset.nd)
                if (teste==true) {
                    alert('bien mainty  e')
                }
            }
}
// function maty(init,jeux,di) {

    // var mandroso=mandroso()
    // if (mandroso==true) {
    //     if (j.dataset.j='red') {
    //         joueur1=parseInt(joueur1)+1
    //     }
    //     else{
    //         joueur2=parseInt(joueur2)+1
    //     }
    // }
// }
function mandroso(init,jeux,joueur,pd,nd){
    if (nd='d' && pd=='') {
        const vald=parseInt(jeux.dataset.c)+1// iteration droite
        
        if ($(jeux.dataset.l+''+vald).dataset.jeux==joueur) {
           
            if ($(jeux.dataset.l+''+vald).id==init.id) {
                return true
            }
            else{
                $(jeux.dataset.l+''+vald).dataset.pd='d'
              $(jeux.dataset.l+''+vald).dataset.nd='d'
              mandroso(init,$(jeux.dataset.l+''+vald),joueur,'d','d')
            }
           
        }
        else{
            jeux.dataset.nd='hd'
            mandroso(init,jeux,joueur,pd,'hd')
        }
        
    }
    else{
       
        if(nd='d'){
            
            const vald=parseInt(jeux.dataset.c)+1// iteration droite
            
            if ($(jeux.dataset.l+''+vald).dataset.jeux==joueur) {
                
                if ($(jeux.dataset.l+''+vald).id==init.id) {
                    return true
                }
                else{
                    $(jeux.dataset.l+''+vald).dataset.pd='d'
                    $(jeux.dataset.l+''+vald).dataset.nd='d'
                    mandroso(init,$(jeux.dataset.l+''+vald),joueur,'d','d')
                }
                
            }
            else{
                jeux.dataset.nd='hd'
                mandroso(init,jeux,joueur,pd,'hd')
            }
        }
       else if(nd='hd'){
            const lvalhd=parseInt(jeux.dataset.l)-1// iteration ligne 
            const cvalhd=parseInt(jeux.dataset.c)+1// iteration colonne
            if ($(lvalhd+''+cvalhd).dataset.jeux==joueur) {
                if ($(lvalhd+''+cvalhd).id==init.id) {
                    return true
                }
                else{
                    $(lvalhd+''+cvalhd).dataset.pd='hd'
                    $(lvalhd+''+cvalhd).dataset.nd='d'
                    mandroso(init,$(lvalhd+''+cvalhd),joueur,'hd','d')
                }
                
            }
            else{
                jeux.dataset.nd='h'
                mandroso(init,jeux,joueur,pd,'h')
            }
        }
        else if(nd='h'){
            const lvalh=parseInt(jeux.dataset.l)-1// iteration ligne 
            const cvalh=parseInt(jeux.dataset.c)// iteration colonne
            if ($(lvalh+''+cvalh).dataset.jeux==joueur) {
                if ($(lvalh+''+cvalh).id==init.id) {
                    return true
                }
                else{
                    $(lvalh+''+cvalh).dataset.pd='h'
                $(lvalh+''+cvalh).dataset.nd='d'
                mandroso(init,$(lvalh+''+cvalh),joueur,'h','d')
                }
            }
            else{
                jeux.dataset.nd='hg'
                mandroso(init,jeux,joueur,pd,'hg')
            }
        }
        else if(nd='hg'){
            const lvalhg=parseInt(jeux.dataset.l)-1// iteration ligne 
            const cvalhg=parseInt(jeux.dataset.c)-1// iteration colonne
            if ($(lvalhg+''+cvalhg).dataset.jeux==joueur) {
                if ($(lvalhg+''+cvalhg).id==init.id) {
                    return true
                }
                else{
                    $(lvalhg+''+cvalhg).dataset.pd='hg'
                $(lvalhg+''+cvalhg).dataset.nd='d'
                mandroso(init,$(lvalhg+''+cvalhg),joueur,'hg','d')
                }
            }
            else{
                jeux.dataset.nd='g'
                mandroso(init,jeux,joueur,pd,'g')
            }
        }
        else if(nd='g'){
            const lvalg=parseInt(jeux.dataset.l)// iteration ligne 
            const cvalg=parseInt(jeux.dataset.c)-1// iteration colonne
            if ($(lvalg+''+cvalg).dataset.jeux==joueur) {
                if ($(lvalg+''+cvalg).id==init.id) {
                    return true
                }
                else{
                    $(lvalg+''+cvalg).dataset.pd='g'
                    $(lvalg+''+cvalg).dataset.nd='d'
                    mandroso(init,$(lvalg+''+cvalg),joueur,'g','d')
                }
                
            }
            else{
                jeux.dataset.nd='bg'
                mandroso(init,jeux,joueur,pd,'bg')
            }
        }
        else if(nd='bg'){
            const lvalbg=parseInt(jeux.dataset.l)+1// iteration ligne 
            const cvalbg=parseInt(jeux.dataset.c)-1// iteration colonne
            if ($(lvalbg+''+cvalbg).dataset.jeux==joueur) {
                if ($(lvalbg+''+cvalbg).id==init.id) {
                    return true
                }
                else{
                    $(lvalbg+''+cvalbg).dataset.pd='bg'
                    $(lvalbg+''+cvalbg).dataset.nd='d'
                    mandroso(init,$(lvalbg+''+cvalbg),joueur,'bg','d')
                }
                
            }
            else{
                jeux.dataset.nd='b'
                mandroso(init,jeux,joueur,pd,'b')
            }
        }
        else if(nd='b'){
            const lvalb=parseInt(jeux.dataset.l)+1// iteration ligne 
            const cvalb=parseInt(jeux.dataset.c)// iteration colonne
            if ($(lvalb+''+cvalb).dataset.jeux==joueur) {
                if ($(lvalb+''+cvalb).id==init.id) {
                    return true
                }
                else{
                    $(lvalb+''+cvalb).dataset.pd='b'
                $(lvalb+''+cvalb).dataset.nd='d'
                mandroso(init,$(lvalb+''+cvalb),joueur,'b','d')
                }
            }
            else{
                jeux.dataset.nd='bd'
                mandroso(init,jeux,joueur,pd,'bd')
            }
        }
        else if(nd='bd'){
            const lvalbd=parseInt(jeux.dataset.l)+1// iteration ligne 
            const cvalbd=parseInt(jeux.dataset.c)+1// iteration colonne
            if ($(lvalbd+''+cvalbd).dataset.jeux==joueur) {
                if ($(lvalbd+''+cvalbd).id==init.id) {
                    return true
                }
                else{
                    $(lvalbd+''+cvalbd).dataset.pd='bd'
                    $(lvalbd+''+cvalbd).dataset.nd='d'
                    mandroso(init,$(lvalbd+''+cvalbd),joueur,'bd','d')
                }
                
            }
            else{
                if (pd='') {
                    return false
                }
                else {
                    miverina(init,jeux,joueur,pd,nd)
                }
            }
        }
    }
    
}
function miverina(init,jeux,joueur,pd,nd){
    if (pd='d') {
        const lpd=parseInt(jeux.dataset.l)// iteration ligne 
        const cpd=parseInt(jeux.dataset.c)-1// iteration colonne
        $(lpd+''+cpd).dataset.nd='hd'
        mandroso(init,$(lpd+''+cpd),joueur,$(lpd+''+cpd).dataset.pd,'hd')
    }
    else if(pd='hd'){
        const lphd=parseInt(jeux.dataset.l)-1// iteration ligne 
        const cphd=parseInt(jeux.dataset.c)+1// iteration colonne
        $(lphd+''+cphd).dataset.nd='h'
        mandroso(init,$(lphd+''+cphd),joueur,$(lphd+''+cphd).dataset.pd,'h')
    }
    else if(pd='h'){
        const lph=parseInt(jeux.dataset.l)-1// iteration ligne 
        const cph=parseInt(jeux.dataset.c)// iteration colonne
        $(lph+''+cph).dataset.nd='hg'
        mandroso(init,$(lph+''+cph),joueur,$(lph+''+cph).dataset.pd,'hg')
    }
    else if(pd='hg'){
        const lphg=parseInt(jeux.dataset.l)// iteration ligne 
        const cphg=parseInt(jeux.dataset.c)-1// iteration colonne
        $(lphg+''+cphg).dataset.nd='g'
        mandroso(init,$(lphg+''+cphg),joueur,$(lphg+''+cphg).dataset.pd,'g')
    }
    else if(pd='g'){
        const lpg=parseInt(jeux.dataset.l)// iteration ligne 
        const cpg=parseInt(jeux.dataset.c)-1// iteration colonne
        $(lpg+''+cpg).dataset.nd='bg'
        mandroso(init,$(lpg+''+cpg),joueur,$(lpg+''+cpg).dataset.pd,'bg')
    }
    else if(pd='bg'){
        const lpbg=parseInt(jeux.dataset.l)-1// iteration ligne 
        const cpbg=parseInt(jeux.dataset.c)+1// iteration colonne
        $(lpbg+''+cpbg).dataset.nd='b'
        mandroso(init,$(lpbg+''+cpbg),joueur,$(lpbg+''+cpbg).dataset.pd,'b')
    }
    else if(pd='b'){
        const lpb=parseInt(jeux.dataset.l)-1// iteration ligne 
        const cpb=parseInt(jeux.dataset.c)// iteration colonne
        $(lpb+''+cpb).dataset.nd='bd'
        mandroso(init,$(lpb+''+cpb),joueur,$(lpb+''+cpb).dataset.pd,'bd')
    }
    else if(pd='bd'){
        const lpbd=parseInt(jeux.dataset.l)-1// iteration ligne 
        const cpbd=parseInt(jeux.dataset.c)-1// iteration colonne
        
       miverina(init,$(lpbd+''+cpbd),joueur,$(lpbd+''+cpbd).dataset.pd,$(lpbd+''+cpbd).dataset.nd)
    }

}
