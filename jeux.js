const save=document.querySelector('#acceuil input[type=submit]')
const acceuil=$('acceuil')
const terrain=document.querySelector('#terrain table')
const nomj1=$('nomj1')
const nomj2=$('nomj2')
var jou1=''
var col1=''
var jou2=''
var col2=''
save.addEventListener('click',function () {
   
    jou1=document.querySelector('#acceuil input[name=nom1]').value
    col1=document.querySelector('#acceuil input[name=col1]').value
    jou2=document.querySelector('#acceuil input[name=nom2]').value
    col2=document.querySelector('#acceuil input[name=col2]').value
   acceuil.style.display='none'
   nomj1.innerHTML=jou1
   nomj2.innerHTML=jou2
//    alert('jou1= '+jou1+' col1= '+col1+' jou2= '+jou2+' col2= '+col2)
})
function compare(x, y) {
    return x - y;
}
var point=0
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
        td.dataset.nd=''//next direction
        td.dataset.gau='mahery'
        td.className='chp'
        td.dataset.etat=''
        tr.appendChild(td)
    }
    
}

const champ= document.getElementsByClassName('chp')
var j1=document.getElementById('j1');
var j2=document.getElementById('j2');
var couleur=col1

var pers='joueur1'
var testes=false
var testes2=false
var l=[]
var c=[]
var tid=[]
var premier=''
var dernier=''
var icolor=''

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
var od=$('od')
var og=('og')
var droite=$('droite')
function func(y){
    
    y.style.backgroundColor=couleur
     y.style.transform='scale(1.8,1.8)'
    //    alert(y.offsetLeft+' et '+y.offsetTop)
    testes=false
       point=0
            if (couleur==col1) {
                l.length=0
                c.length=0
                // alert('ligndeb= '+l+'coldeb= '+c)
                couleur=col2
                y.dataset.jeux=col1
                
                mandroso(y,y,col1,y.dataset.pd,y.dataset.nd)
                // if (testes==true) {
                //     test(dernier,premier,l,c,col2)
                    // alert(testes2)
                //     if (testes2==true) {
                //         ligne(l,c,col1)
                //         tid.length=0
                //         l.length=0
                //         c.length=0
                //         j1.innerHTML=parseInt(j1.innerHTML)+point
                //     }
                //     else{
                //         verification(y,dernier,col1,dernier.dataset.pd,dernier.dataset.nd)
                //     }
                  
                  
                   
                // }
                // else{
                    // alert('dkfjd')
                //     y.dataset.nd=''
                //     y.dataset.pd=''
                //     alert(tid.length+' et tid= '+tid)
                // //     for (let i = 0; i < tid.length; i++) {
                //         $(tid[i]).dataset.nd=''
                //         $(tid[i]).dataset.pd=''
                        // alert('nd= '+$(tid[i]).dataset.nd)
                //     }
                //     tid.length=0
                //     l.length=0
                //     c.length=0
                // }
                
            }
            else  {
                l.length=0
                c.length=0
                // alert('ligndeb= '+l+'coldeb= '+c)
                y.dataset.jeux=col2
                couleur=col1
                mandroso(y,y,col2,y.dataset.pd,y.dataset.nd)
                // if (testes==true) {
                //     test(dernier,premier,l,c,col1)
                //     if (testes2==true) {
                //         ligne(l,c,col2)
                //         tid.length=0
                //         l.length=0
                //         c.length=0
                //         j2.innerHTML=parseInt(j2.innerHTML)+point
                //     }
                //     else{
                //         verification(y,dernier,col2,dernier.dataset.pd,dernier.dataset.nd)
                //     }
                   
                // }
                // else{
                //     alert('dzdz')
                //     y.dataset.nd=''
                //     y.dataset.pd=''
                    // alert(tid.length+' et tid= '+tid)
                //     for (let i = 0; i < tid.length; i++) {
                //         $(tid[i]).dataset.nd=''
                //         $(tid[i]).dataset.pd=''
                        // alert('nd= '+$(tid[i]).dataset.nd)
                //     }
                //     tid.length=0
                //     l.length=0
                //     c.length=0
                // }
            }
           
           
}
function mandroso(init,jeux,joueur,pd,nd){
    initial=init
    // alert('mandroso init= '+init.id+' jeux= '+jeux.id+'nd= '+nd+' pd= '+pd+' ligne '+l+' colone '+c)
   
    var vall=parseInt(jeux.dataset.l)
    var valc=parseInt(jeux.dataset.l)
    // var ligne=jeux
    if (pd=='') {
        
        if (nd=='d') {
        
            vall=parseInt(jeux.dataset.l)
            valc=parseInt(jeux.dataset.c)+1// iteration droite
            
        }
        else if(nd=='hd'){
            vall=parseInt(jeux.dataset.l)-1// iteration ligne 
            valc=parseInt(jeux.dataset.c)+1
        }
        else if(nd=='h'){
            vall=parseInt(jeux.dataset.l)-1// iteration ligne 
            valc=parseInt(jeux.dataset.c)// iteration colonne
        }
        else if(nd=='hg'){
            vall=parseInt(jeux.dataset.l)-1// iteration ligne 
            valc=parseInt(jeux.dataset.c)-1// iteration colonne
        }
        else if(nd=='g'){
            vall=parseInt(jeux.dataset.l)// iteration ligne 
            valc=parseInt(jeux.dataset.c)-1// iteration colonne
        }
        else if(nd=='bg'){
            vall=parseInt(jeux.dataset.l)+1// iteration ligne 
            valc=parseInt(jeux.dataset.c)-1// iteration colonne
        }
        else if(nd=='b'){
            vall=parseInt(jeux.dataset.l)+1// iteration ligne 
            valc=parseInt(jeux.dataset.c)// iteration colonne
        }
        else if (nd=='bd') {
            vall=parseInt(jeux.dataset.l)+1// iteration ligne 
            valc=parseInt(jeux.dataset.c)+1// iteration colonne
        }
        
        // const vald=parseInt(jeux.dataset.c)+1// iteration droite
        // alert('etat = '+$(vall+''+valc).dataset.etat)
        if ($(vall+''+valc).dataset.jeux==joueur && $(vall+''+valc).dataset.etat!='maty' && $(vall+''+valc).dataset.etat!='ktk' ) {
           
            l.push(jeux.dataset.l)
            c.push(jeux.dataset.c)
                premier=$(vall+''+valc)
                
            if ($(vall+''+valc).id==init.id ) {
                
                testes=true
                // test(dernier,premier,l,c,joueur)
                // alert(testes2)
                // if (testes2==true) {
                //     lgn(l,c,joueur)
                //     tid.length=0
                //     l.length=0
                //     c.length=0
                //     if (joueur==col1) {
                //         j1.innerHTML=parseInt(j1.innerHTML)+point
                //     }
                //     else{
                //         j2.innerHTML=parseInt(j2.innerHTML)+point
                //     }
                    
                // }
                // else{
                //     verification(init,dernier,joueur,dernier.dataset.pd,dernier.dataset.nd)
                // }
            }
            else{
                l.push( $(vall+''+valc).dataset.l)
               c.push( $(vall+''+valc).dataset.c)
               tid.push( $(vall+''+valc).id)
                $(vall+''+valc).dataset.pd=nd
                $(vall+''+valc).dataset.nd='d'
                $(vall+''+valc).dataset.etat='ktk'
                // if (testes==false) {
                    mandroso(init, $(vall+''+valc),joueur, $(vall+''+valc).dataset.pd,$(vall+''+valc).dataset.nd)
                // }
                // else{
                //     $(vall+''+valc).dataset.nd='d'
                //     mandroso(init,$(vall+''+valc),joueur,nd,'d')
                // }
                    
              
            }
           
        }
        else{
            if (nd=='') {
                jeux.dataset.nd='d'
            mandroso(init,jeux,joueur,pd,'d')
            }
           else if (nd=='d') {
                jeux.dataset.nd='hd'
            mandroso(init,jeux,joueur,pd,'hd')
            }
            else if (nd=='hd') {
                jeux.dataset.nd='h'
                mandroso(init,jeux,joueur,pd,'h')
            }
            else if (nd=='h') {
                jeux.dataset.nd='hg'
                mandroso(init,jeux,joueur,pd,'hg')
            }
            else if (nd=='hg') {
                jeux.dataset.nd='g'
                mandroso(init,jeux,joueur,pd,'g')
            }
            else if (nd=='g') {
                jeux.dataset.nd='bg'
                mandroso(init,jeux,joueur,pd,'bg')
            }
            else if (nd=='bg') {
                jeux.dataset.nd='b'
                mandroso(init,jeux,joueur,pd,'b')
            }
            else if (nd=='b') {
                jeux.dataset.nd='bd'
                mandroso(init,jeux,joueur,pd,'bd')
            }
            else if (nd=='bd') {
               
                testes=false
                // alert('dkfjd')
                init.dataset.nd=''
                init.dataset.pd=''
                // alert(tid.length+' et tid= '+tid)
                for (let i = 0; i < tid.length; i++) {
                    // alert('etat mbol nisy= '+$(tid[i]).dataset.etat)
                    $(tid[i]).dataset.nd=''
                    $(tid[i]).dataset.pd=''
                    $(tid[i]).dataset.etat=''
                    // alert('etat tsis= '+$(tid[i]).dataset.etat)
                }
                tid.length=0
                l.length=0
                c.length=0
            }
            
        }
        
    }
    else{
        if(nd==''){
            mandroso(init,jeux,joueur,pd,'d')
        }
        else if(nd=='d'){
            const vald=parseInt(jeux.dataset.c)+1// iteration droite
           
            if (pd=='g' || $(jeux.dataset.l+''+vald).dataset.etat=='ktk' ) {
                jeux.dataset.nd='hd'
                mandroso(init,jeux,joueur,pd,'hd')
               
            }
            else if ($(jeux.dataset.l+''+vald).dataset.jeux==joueur && $(jeux.dataset.l+''+vald).dataset.etat!='maty' && $(jeux.dataset.l+''+vald).dataset.etat!='ktk') {
               
                // l.push(jeux.dataset.l)
                // c.push(jeux.dataset.c)
                
                if ($(jeux.dataset.l+''+vald).id==init.id) {
                    // if (init.dataset.jeux==col1) {
                    //     icolor=col2
                    // }
                    // else{
                    //  icolor=col1
                    // }
                    // test(jeux,premier,l,c,icolor)
                    dernier=jeux
                    testes=true
                    if (joueur==col1) {
                        icol=col2
                    }
                    else{
                        icol=col1
                    }
                    test(dernier,premier,l,c,icol)
                // alert(testes2)
                if (testes2==true) {
                    lgn(l,c,joueur)
                    tid.length=0
                    l.length=0
                    c.length=0
                    if (joueur==col1) {
                        j1.innerHTML=parseInt(j1.innerHTML)+point
                    }
                    else{
                        j2.innerHTML=parseInt(j2.innerHTML)+point
                    }
                    
                }
                else{
                    verification(init,dernier,joueur,dernier.dataset.pd,dernier.dataset.nd)
                }
                }
                   
                else{
                    l.push($(jeux.dataset.l+''+vald).dataset.l)
                    c.push($(jeux.dataset.l+''+vald).dataset.c)
                    tid.push($(jeux.dataset.l+''+vald).id)
                    $(jeux.dataset.l+''+vald).dataset.pd='d'
                    $(jeux.dataset.l+''+vald).dataset.nd='d'
                    $(jeux.dataset.l+''+vald).dataset.etat='ktk'
                    // if (testes==false) {
                      mandroso(init,$(jeux.dataset.l+''+vald),joueur,'d', $(jeux.dataset.l+''+vald).dataset.nd)
                    // }
                    // else{
                    //     $(jeux.dataset.l+''+vald).dataset.nd='d' 
                    //     mandroso(init,$(jeux.dataset.l+''+vald),joueur,'d','d')
                    // }
                    
                }
                
            }
            else{
                jeux.dataset.nd='hd'
                mandroso(init,jeux,joueur,pd,'hd')
            }
        }
       else if(nd=='hd'){
        
            const lvalhd=parseInt(jeux.dataset.l)-1// iteration ligne 
            const cvalhd=parseInt(jeux.dataset.c)+1// iteration colonne
            if (pd=='bg' || $(lvalhd+''+cvalhd).dataset.etat=='ktk') {
                jeux.dataset.nd='h'
                mandroso(init,jeux,joueur,pd,'h')
            }
            else if ($(lvalhd+''+cvalhd).dataset.jeux==joueur && $(lvalhd+''+cvalhd).dataset.etat!='maty'&& $(lvalhd+''+cvalhd).dataset.etat!='ktk' ) {
                
                // l.push(jeux.dataset.l)
                // c.push(jeux.dataset.c)
                if ($(lvalhd+''+cvalhd).id==init.id ) {
                    // if (init.dataset.jeux==col1) {
                    //     icolor=col2
                    // }
                    // else{
                    //  icolor=col1
                    // }
                    // test(jeux,premier,l,c,icolor)
                    // alert(testes)
                    testes=true
                    dernier=jeux
                    if (joueur==col1) {
                        icol=col2
                    }
                    else{
                        icol=col1
                    }
                    test(dernier,premier,l,c,icol)
                    
                    // alert(testes2)
                    if (testes2==true) {
                        lgn(l,c,joueur)
                        tid.length=0
                        l.length=0
                        c.length=0
                        if (joueur==col1) {
                            j1.innerHTML=parseInt(j1.innerHTML)+point
                        }
                        else{
                            j2.innerHTML=parseInt(j2.innerHTML)+point
                        }
                        
                    }
                    else{
                        verification(init,dernier,joueur,dernier.dataset.pd,dernier.dataset.nd)
                    }

                }
                
                else{
                    l.push($(lvalhd+''+cvalhd).dataset.l)
                    c.push($(lvalhd+''+cvalhd).dataset.c)
                    tid.push($(lvalhd+''+cvalhd).id)
                    $(lvalhd+''+cvalhd).dataset.pd='hd'
                    $(lvalhd+''+cvalhd).dataset.nd='d'
                    $(lvalhd+''+cvalhd).dataset.etat='ktk'
                    // if (teste==false) {
                       
                        
                        mandroso(init,$(lvalhd+''+cvalhd),joueur,'hd', $(lvalhd+''+cvalhd).dataset.nd)
                    // }
                    // $(lvalhd+''+cvalhd).dataset.nd='d'
                    // $(lvalhd+''+cvalhd).dataset.etat='ktk' 
                    // mandroso(init,$(lvalhd+''+cvalhd),joueur,'hd','d')
                }
                
            }
            else{
                jeux.dataset.nd='h'
                mandroso(init,jeux,joueur,pd,'h')
            }
        }
        else if(nd=='h'){
            const lvalh=parseInt(jeux.dataset.l)-1// iteration ligne 
            const cvalh=parseInt(jeux.dataset.c)// iteration colonne
            if (pd=='b' || $(lvalh+''+cvalh).dataset.etat=='ktk') {
                jeux.dataset.nd='hg'
                mandroso(init,jeux,joueur,pd,'hg')
            }
            else if ($(lvalh+''+cvalh).dataset.jeux==joueur && $(lvalh+''+cvalh).dataset.etat!='maty' && $(lvalh+''+cvalh).dataset.etat!='ktk') {
                // l.push(jeux.dataset.l)
                // c.push(jeux.dataset.c)
                
                if ($(lvalh+''+cvalh).id==init.id) {
                    // if (init.dataset.jeux==col1) {
                    //     icolor=col2
                    // }
                    // else{
                    //  icolor=col1
                    // }
                    // test(jeux,premier,l,c,icolor)
                    
                    testes=true
                    dernier=jeux
                    
                    if (joueur==col1) {
                        icol=col2
                    }
                    else{
                        icol=col1
                    }
                    test(dernier,premier,l,c,icol)
                    // alert(testes2)
                    if (testes2==true) {
                        lgn(l,c,joueur)
                        tid.length=0
                        l.length=0
                        c.length=0
                        if (joueur==col1) {
                            j1.innerHTML=parseInt(j1.innerHTML)+point
                        }
                        else{
                            j2.innerHTML=parseInt(j2.innerHTML)+point
                        }
                        
                    }
                    else{
                        verification(init,dernier,joueur,dernier.dataset.pd,dernier.dataset.nd)
                    }
                }
                
                else{
                    l.push( $(lvalh+''+cvalh).dataset.l)
                    c.push( $(lvalh+''+cvalh).dataset.c)
                    tid.push($(lvalh+''+cvalh).id)
                    $(lvalh+''+cvalh).dataset.pd='h'
                $(lvalh+''+cvalh).dataset.nd='d'
                $(lvalh+''+cvalh).dataset.etat='ktk'
                mandroso(init,$(lvalh+''+cvalh),joueur,'h', $(lvalh+''+cvalh).dataset.nd)
                }
            }
            else{
                jeux.dataset.nd='hg'
                mandroso(init,jeux,joueur,pd,'hg')
            }
        }
        else if(nd=='hg'){
            
            const lvalhg=parseInt(jeux.dataset.l)-1// iteration ligne 
            const cvalhg=parseInt(jeux.dataset.c)-1// iteration colonne
            if (pd=='bd' || $(lvalhg+''+cvalhg).dataset.etat=='ktk') {
                jeux.dataset.nd='g'
                mandroso(init,jeux,joueur,pd,'g')
            }
            else if ($(lvalhg+''+cvalhg).dataset.jeux==joueur && $(lvalhg+''+cvalhg).dataset.etat!='maty' && $(lvalhg+''+cvalhg).dataset.etat!='ktk') {
                // l.push(jeux.dataset.l)
                // c.push(jeux.dataset.c)
                
                if ($(lvalhg+''+cvalhg).id==init.id ) {
                    // if (init.dataset.jeux==col1) {
                    //     icolor=col2
                    // }
                    // else{
                    //  icolor=col1
                    // }
                    // test(jeux,premier,l,c,icolor)
                    testes=true
                    dernier=jeux
                    if (joueur==col1) {
                        icol=col2
                    }
                    else{
                        icol=col1
                    }
                    test(dernier,premier,l,c,icol)
                    // alert(testes2)
                    if (testes2==true) {
                        lgn(l,c,joueur)
                        tid.length=0
                        l.length=0
                        c.length=0
                        if (joueur==col1) {
                            j1.innerHTML=parseInt(j1.innerHTML)+point
                        }
                        else{
                            j2.innerHTML=parseInt(j2.innerHTML)+point
                        }
                        
                    }
                    else{
                        verification(init,dernier,joueur,dernier.dataset.pd,dernier.dataset.nd)
                    }
                }
                
                else{
                    l.push($(lvalhg+''+cvalhg).dataset.l)
                    c.push($(lvalhg+''+cvalhg).dataset.c)
                    tid.push($(lvalhg+''+cvalhg).id)
                    $(lvalhg+''+cvalhg).dataset.pd='hg'
                $(lvalhg+''+cvalhg).dataset.nd='d'
                $(lvalhg+''+cvalhg).dataset.etat='ktk'
               
                mandroso(init,$(lvalhg+''+cvalhg),joueur,'hg', $(lvalhg+''+cvalhg).dataset.nd)
                }
            }
            else{
                jeux.dataset.nd='g'
                mandroso(init,jeux,joueur,pd,'g')
            }
        }
        else if(nd=='g'){
            const lvalg=parseInt(jeux.dataset.l)// iteration ligne 
            const cvalg=parseInt(jeux.dataset.c)-1// iteration colonne
            if (pd=='d' || $(lvalg+''+cvalg).dataset.etat=='ktk') {
                jeux.dataset.nd='bg'
                mandroso(init,jeux,joueur,pd,'bg')
            }
            else if ($(lvalg+''+cvalg).dataset.jeux==joueur && $(lvalg+''+cvalg).dataset.etat!='maty' && $(lvalg+''+cvalg).dataset.etat!='ktk') {
                
                // l.push(jeux.dataset.l)
                // c.push(jeux.dataset.c)
               
                if ($(lvalg+''+cvalg).id==init.id ) {
                    // if (init.dataset.jeux==col1) {
                    //     icolor=col2
                    // }
                    // else{
                    //  icolor=col1
                    // }
                  
                //    test(jeux,premier,l,c,icolor)
                testes=true
                dernier=jeux
                if (joueur==col1) {
                    icol=col2
                }
                else{
                    icol=col1
                }
                test(dernier,premier,l,c,icol)
                // alert(testes2)
                if (testes2==true) {
                    lgn(l,c,joueur)
                    tid.length=0
                    l.length=0
                    c.length=0
                    if (joueur==col1) {
                        j1.innerHTML=parseInt(j1.innerHTML)+point
                    }
                    else{
                        j2.innerHTML=parseInt(j2.innerHTML)+point
                    }
                    
                }
                else{
                    verification(init,dernier,joueur,dernier.dataset.pd,dernier.dataset.nd)
                }
                }
                
                else{
                    l.push($(lvalg+''+cvalg).dataset.l)
                    c.push($(lvalg+''+cvalg).dataset.c)
                    tid.push($(lvalg+''+cvalg).id)
                    $(lvalg+''+cvalg).dataset.pd='g'
                    $(lvalg+''+cvalg).dataset.nd='d'
                    $(lvalg+''+cvalg).dataset.etat='ktk'
                  
                    mandroso(init,$(lvalg+''+cvalg),joueur,'g',  $(lvalg+''+cvalg).dataset.nd)
                }
                
            }
            else{
                jeux.dataset.nd='bg'
                mandroso(init,jeux,joueur,pd,'bg')
            }
        }
        else if(nd=='bg' ){
            const lvalbg=parseInt(jeux.dataset.l)+1// iteration ligne 
            const cvalbg=parseInt(jeux.dataset.c)-1// iteration colonne
            if (pd=='hd' || $(lvalbg+''+cvalbg).dataset.etat=='ktk') {
                jeux.dataset.nd='b'
                mandroso(init,jeux,joueur,pd,'b')
            }
            else if ($(lvalbg+''+cvalbg).dataset.jeux==joueur && $(lvalbg+''+cvalbg).dataset.etat!='maty' && $(lvalbg+''+cvalbg).dataset.etat!='ktk') {
                // l.push(jeux.dataset.l)
                // c.push(jeux.dataset.c)
               
                if ($(lvalbg+''+cvalbg).id==init.id ) {
                    // if (init.dataset.jeux==col1) {
                    //     icolor=col2
                    // }
                    // else{
                    //  icolor=col1
                    // }
                    // test(jeux,premier,l,c,icolor)
                    testes=true
                    dernier=jeux
                    if (joueur==col1) {
                        icol=col2
                    }
                    else{
                        icol=col1
                    }
                    test(dernier,premier,l,c,icol)
                    // alert(testes2)
                    if (testes2==true) {
                        lgn(l,c,joueur)
                        tid.length=0
                        l.length=0
                        c.length=0
                        if (joueur==col1) {
                            j1.innerHTML=parseInt(j1.innerHTML)+point
                        }
                        else{
                            j2.innerHTML=parseInt(j2.innerHTML)+point
                        }
                        
                    }
                    else{
                        verification(init,dernier,joueur,dernier.dataset.pd,dernier.dataset.nd)
                    }
                }
               
                else{
                    l.push( $(lvalbg+''+cvalbg).dataset.l)
                    c.push( $(lvalbg+''+cvalbg).dataset.c)
                    tid.push( $(lvalbg+''+cvalbg).id)
                    $(lvalbg+''+cvalbg).dataset.pd='bg'
                    $(lvalbg+''+cvalbg).dataset.nd='d'
                    $(lvalbg+''+cvalbg).dataset.etat='ktk'
                     
                    
                    mandroso(init,$(lvalbg+''+cvalbg),joueur,'bg', $(lvalbg+''+cvalbg).dataset.nd)
                }
                
            }
            else{
                jeux.dataset.nd='b'
                mandroso(init,jeux,joueur,pd,'b')
            }
        }
        else if(nd=='b' ){
            
            const lvalb=parseInt(jeux.dataset.l)+1// iteration ligne 
            const cvalb=parseInt(jeux.dataset.c)// iteration colonne
            // alert('etat ='+ $(lvalb+''+cvalb).dataset.etat)
            if (pd=='h' || $(lvalb+''+cvalb).dataset.etat=='ktk') {
                jeux.dataset.nd='bd'
                mandroso(init,jeux,joueur,pd,'bd')
            }
            else if ($(lvalb+''+cvalb).dataset.jeux==joueur && $(lvalb+''+cvalb).dataset.etat!='maty' && $(lvalb+''+cvalb).dataset.etat!='ktk') {
                // l.push(jeux.dataset.l)
                // c.push(jeux.dataset.c)
               
                if ($(lvalb+''+cvalb).id==init.id ) {
                    // if (init.dataset.jeux==col1) {
                    //     icolor=col2
                    // }
                    // else{
                    //  icolor=col1
                    // }
                    // test(jeux,premier,l,c,icolor)
                    testes=true
                    dernier=jeux
                    if (joueur==col1) {
                        icol=col2
                    }
                    else{
                        icol=col1
                    }
                    test(dernier,premier,l,c,icol)
                    // alert(testes2)
                    if (testes2==true) {
                        lgn(l,c,joueur)
                        tid.length=0
                        l.length=0
                        c.length=0
                        if (joueur==col1) {
                            j1.innerHTML=parseInt(j1.innerHTML)+point
                        }
                        else{
                            j2.innerHTML=parseInt(j2.innerHTML)+point
                        }
                        
                    }
                    else{
                        verification(init,dernier,joueur,dernier.dataset.pd,dernier.dataset.nd)
                    }
                }
               
                else{
                    l.push($(lvalb+''+cvalb).dataset.l)
                    c.push($(lvalb+''+cvalb).dataset.c)
                    tid.push($(lvalb+''+cvalb).id)
                    $(lvalb+''+cvalb).dataset.pd='b'
                $(lvalb+''+cvalb).dataset.nd='d'
                $(lvalb+''+cvalb).dataset.etat='ktk'
                
                mandroso(init,$(lvalb+''+cvalb),joueur,'b',$(lvalb+''+cvalb).dataset.nd)
                }
            }
            else{
                jeux.dataset.nd='bd'
                mandroso(init,jeux,joueur,pd,'bd')
            }
        }
        else if(nd=='bd'){
            
            const lvalbd=parseInt(jeux.dataset.l)+1// iteration ligne 
            const cvalbd=parseInt(jeux.dataset.c)+1// iteration colonne
            if (pd=='hg' || $(lvalbd+''+cvalbd).dataset.etat=='ktk') {
                miverina(init,jeux,joueur,pd,nd)
            }
            else if ($(lvalbd+''+cvalbd).dataset.jeux==joueur && $(lvalbd+''+cvalbd).dataset.etat!='maty' && $(lvalbd+''+cvalbd).dataset.etat!='ktk') {
                // l.push(jeux.dataset.l)
                // c.push(jeux.dataset.c)
               
                if ($(lvalbd+''+cvalbd).id==init.id ) {
                    // if (init.dataset.jeux==col1) {
                    //     icolor=col2
                    // }
                    // else{
                    //  icolor=col1
                    // }
                    // test(jeux,premier,l,c,icolor)
                    testes=true
                    dernier=jeux
                    if (joueur==col1) {
                        icol=col2
                    }
                    else{
                        icol=col1
                    }
                    test(dernier,premier,l,c,icol)
                    // alert(testes2)
                    if (testes2==true) {
                        // alert('l = '+l+' c ='+c+'joueur= '+joueur)
                        lgn(l,c,joueur)
                        tid.length=0
                        l.length=0
                        c.length=0
                        if (joueur==col1) {
                            j1.innerHTML=parseInt(j1.innerHTML)+point
                        }
                        else{
                            j2.innerHTML=parseInt(j2.innerHTML)+point
                        }
                        
                    }
                    else{
                        verification(init,dernier,joueur,dernier.dataset.pd,dernier.dataset.nd)
                    }
                }
                else{
                    l.push($(lvalbd+''+cvalbd).dataset.l)
                    c.push($(lvalbd+''+cvalbd).dataset.c)
                    tid.push($(lvalbd+''+cvalbd).id)
                    $(lvalbd+''+cvalbd).dataset.pd='bd'
                    $(lvalbd+''+cvalbd).dataset.nd='d'
                    $(lvalbd+''+cvalbd).dataset.etat='ktk'
                   
                    mandroso(init,$(lvalbd+''+cvalbd),joueur,'bd',$(lvalbd+''+cvalbd).dataset.nd)
                }
                
            }
            else{
                if (pd=='') {
                    testes=false
                    // alert('dkfjd')
                    init.dataset.nd=''
                    init.dataset.pd=''
                    // alert(tid.length+' et tid= '+tid)
                    for (let i = 0; i < tid.length; i++) {
                        $(tid[i]).dataset.nd=''
                        $(tid[i]).dataset.pd=''
                        $(tid[i]).dataset.etat=''
                        // alert('nd= '+$(tid[i]).dataset.nd)
                    }
                    tid.length=0
                    l.length=0
                    c.length=0
                }
                else {
                    miverina(init,jeux,joueur,pd,nd)
                }
            }
        }
    }
    
}
function miverina(init,jeux,joueur,pd,nd){
    // alert('miverina ')
    if (pd=='d') {
        const lpd=parseInt(jeux.dataset.l)// iteration ligne 
        const cpd=parseInt(jeux.dataset.c)-1// iteration colonne
        $(lpd+''+cpd).dataset.nd='hd'
        l.pop()
        c.pop()
        mandroso(init,$(lpd+''+cpd),joueur,$(lpd+''+cpd).dataset.pd,'hd')
    }
    else if(pd=='hd'){
        const lphd=parseInt(jeux.dataset.l)+1// iteration ligne 
        const cphd=parseInt(jeux.dataset.c)-1// iteration colonne
        $(lphd+''+cphd).dataset.nd='h'
        l.pop()
        c.pop()
        mandroso(init,$(lphd+''+cphd),joueur,$(lphd+''+cphd).dataset.pd,'h')
    }
    else if(pd=='h'){
        const lph=parseInt(jeux.dataset.l)+1// iteration ligne 
        const cph=parseInt(jeux.dataset.c)// iteration colonne
        $(lph+''+cph).dataset.nd='hg'
        l.pop()
        c.pop()
        mandroso(init,$(lph+''+cph),joueur,$(lph+''+cph).dataset.pd,'hg')
    }
    else if(pd=='hg'){
        const lphg=parseInt(jeux.dataset.l)+1// iteration ligne 
        const cphg=parseInt(jeux.dataset.c)+1// iteration colonne
        $(lphg+''+cphg).dataset.nd='g'
        l.pop()
        c.pop()
        mandroso(init,$(lphg+''+cphg),joueur,$(lphg+''+cphg).dataset.pd,'g')
    }
    else if(pd=='g'){
        const lpg=parseInt(jeux.dataset.l)// iteration ligne 
        const cpg=parseInt(jeux.dataset.c)+1// iteration colonne
        $(lpg+''+cpg).dataset.nd='bg'
        l.pop()
        c.pop()
        mandroso(init,$(lpg+''+cpg),joueur,$(lpg+''+cpg).dataset.pd,'bg')
    }
    else if(pd=='bg'){
        const lpbg=parseInt(jeux.dataset.l)-1// iteration ligne 
        const cpbg=parseInt(jeux.dataset.c)+1// iteration colonne
        $(lpbg+''+cpbg).dataset.nd='b'
        l.pop()
        c.pop()
        mandroso(init,$(lpbg+''+cpbg),joueur,$(lpbg+''+cpbg).dataset.pd,'b')
    }
    else if(pd=='b'){
        const lpb=parseInt(jeux.dataset.l)-1// iteration ligne 
        const cpb=parseInt(jeux.dataset.c)// iteration colonne
        $(lpb+''+cpb).dataset.nd='bd'
        l.pop()
        c.pop()
        mandroso(init,$(lpb+''+cpb),joueur,$(lpb+''+cpb).dataset.pd,'bd')
    }
    else if(pd=='bd'){
        const lpbd=parseInt(jeux.dataset.l)-1// iteration ligne 
        const cpbd=parseInt(jeux.dataset.c)-1// iteration colonne
        jeux.dataset.nd=''
       miverina(init,$(lpbd+''+cpbd),joueur,$(lpbd+''+cpbd).dataset.pd,$(lpbd+''+cpbd).dataset.nd)
    }

}
function test(je,pr,lign,coln,icol){

    // alert('testes '+je.id+' '+pr.id+' '+lign+' '+coln+' '+icol+' '+je.dataset.nd+' '+pr.dataset.nd)
    var lig=new Object()
    var li=[]
    var li=[...new Set(lign)]
    li=li.sort(compare)
    // alert(li)
    for (let i = 0; i < li.length; i++) {
        lig[li[i]]=[]
       
    }
    for (let i = 0; i < lign.length; i++) {
        lig[lign[i]].push(coln[i])
        lig[lign[i]].sort(compare)
        // alert(lig[lign[i]])
    }
   
    for (let i = 0; i < li.length; i++) {
        for (let j = Math.min(...lig[li[i]]); j < Math.max(...lig[li[i]])+1; j++) {
           if ( $(li[i]+''+j).dataset.jeux == icol &&  $(li[i]+''+j).dataset.etat!='maty' ) {
           
            $(li[i]+''+j).dataset.etat='maty'
               point=point+1
           }
            
        }
       
    }
    // alert(point)
    if (point!=0 && pr.id!=je.id) {
        testes2=true
    }
    else{
        // for (let i = 0; i < lign.length; i++) {
        //     $(lign[i]+''+coln[i]).dataset.etat=''
        // }
        // l.length=0
        // c.length=0
        // alert('ligneteste= '+lign+' colonne teste= '+coln)
        testes2=false
    }
}
function lgn(ligne,colonne,color) {
 
    // alert('ligne= '+ligne+' colonne=  '+colonne+' color= '+color)
    for (let i = 0; i < tid.length; i++) {
        // // alert('etat mbol nisy= '+$(tid[i]).dataset.etat)
        // $(tid[i]).dataset.nd=''
        // $(tid[i]).dataset.pd=''
        if ( $(tid[i]).dataset.etat!='maty') {
            $(tid[i]).dataset.etat=''
        }
        
        // alert('etat tsis= '+$(tid[i]).dataset.etat)
    }
        var rot=0
       var left=0
       var top=0
    //  color.style.position='absolute';
    //  color.style.top='211px';
    //  color.style.left='405px';
    //  color.style.position='absolute';
    for (let i = 0; i < ligne.length; i++) {
        // alert('id= '+$(ligne[i]+''+colonne[i]).id+' '+$(ligne[i]+''+colonne[i]).dataset.nd)
        
        var ligneog=document.createElement('div')
        ligneog.className=color
         ligneog.style.position='absolute';
     ligneog.style.top='211px';
     ligneog.style.left='405px';
     ligneog.style.width='45px';
     ligneog.style.height='2px';
    //  alert(color)
        champi.appendChild(ligneog)
        if ($(ligne[i]+''+colonne[i]).dataset.nd=='d') {
            top=2
            left=-1
            rot=0
            $(ligne[i]+''+colonne[i]).dataset.nd=''
        }
        else if ($(ligne[i]+''+colonne[i]).dataset.nd=='hd') {
            top=-15
            left=-1
            rot=-40
            $(ligne[i]+''+colonne[i]).dataset.nd=''
        }
        else if ($(ligne[i]+''+colonne[i]).dataset.nd=='h') {
            top=-15
            left=-18
            rot=90
            $(ligne[i]+''+colonne[i]).dataset.nd=''
        }
        else if ($(ligne[i]+''+colonne[i]).dataset.nd=='hg') {
            top=-16
            left=-40
            rot=40
            $(ligne[i]+''+colonne[i]).dataset.nd=''
        }
        else if ($(ligne[i]+''+colonne[i]).dataset.nd=='bg') {
            top=18
            left=-43
            rot=-40
            $(ligne[i]+''+colonne[i]).dataset.nd=''
        }
    else if ($(ligne[i]+''+colonne[i]).dataset.nd=='g') {
                top=2
                left=-40
                rot=0
                $(ligne[i]+''+colonne[i]).dataset.nd=''
            }
        else if ($(ligne[i]+''+colonne[i]).dataset.nd=='b') {
            top=20
            left=-18
            rot=90
            $(ligne[i]+''+colonne[i]).dataset.nd=''
        }
        else if ($(ligne[i]+''+colonne[i]).dataset.nd=='bd') {
            top=20
            left=5
            rot=40
            $(ligne[i]+''+colonne[i]).dataset.nd=''
        }
        
        ligneog.style.left=($(ligne[i]+''+colonne[i]).offsetLeft+left)+'px'
        ligneog.style.top=($(ligne[i]+''+colonne[i]).offsetTop+top)+'px'
        ligneog.style.transform='rotate('+rot+'deg)'
        ligneog.style.backgroundColor=color
    }
    
}
function verification(init,jeux,joueur,pd,nd) {
    // alert('verification')
    if (nd=='') {
        jeux.dataset.nd='d'
        mandroso(init,jeux,joueur,pd,'d')
    }
    else if (nd=='d') {
                jeux.dataset.nd='hd'
            mandroso(init,jeux,joueur,pd,'hd')
            }
            else if (nd=='hd') {
                jeux.dataset.nd='h'
                mandroso(init,jeux,joueur,pd,'h')
            }
            else if (nd=='h') {
                jeux.dataset.nd='hg'
                mandroso(init,jeux,joueur,pd,'hg')
            }
            else if (nd=='hg') {
                jeux.dataset.nd='g'
                mandroso(init,jeux,joueur,pd,'g')
            }
            else if (nd=='g') {
                jeux.dataset.nd='bg'
                mandroso(init,jeux,joueur,pd,'bg')
            }
            else if (nd=='bg') {
                jeux.dataset.nd='b'
                mandroso(init,jeux,joueur,pd,'b')
            }
            else if (nd=='b') {
                jeux.dataset.nd='bd'
                mandroso(init,jeux,joueur,pd,'bd')
            }
            else if (nd=='bd') {
                
                miverina(init,jeux,joueur,pd,nd)
            }
}


