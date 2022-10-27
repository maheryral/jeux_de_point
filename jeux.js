
function compare(x, y) {
    return x - y;
}
var point=0
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
        td.dataset.etat=''
        tr.appendChild(td)
    }
    
}
const champ= document.getElementsByClassName('chp')
var j1=document.getElementById('j1');
var j2=document.getElementById('j2');
var couleur='red'
var pers='joueur1'
var testes=false
var testes2=false
var l=[]
var c=[]
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
            if (couleur=='red') {
                couleur='black'
                y.dataset.jeux='red'
                
                mandroso(y,y,'red',y.dataset.pd,y.dataset.nd)
                if (testes==true) {
                    test(dernier,premier,l,c,'black')
                    alert(testes2)
                    if (testes2==true) {
                        ligne(l,c,'red')
                        l.length=0
                        c.length=0
                        j1.innerHTML=parseInt(j1.innerHTML)+point
                    }
                  
                  
                   
                }
                else{
                    l.length=0
                    c.length=0
                }
                
            }
            else  {
                
                y.dataset.jeux='black'
                couleur='red'
                mandroso(y,y,'black',y.dataset.pd,y.dataset.nd)
                if (testes==true) {
                    test(dernier,premier,l,c,'red')
                    if (testes2==true) {
                        ligne(l,c,'black')
                    
                        l.length=0
                        c.length=0
                        j2.innerHTML=parseInt(j2.innerHTML)+point
                    }
                   
                }
                else{
                    l.length=0
                    c.length=0
                }
            }
           
           
}
function mandroso(init,jeux,joueur,pd,nd){
    
    // alert(jeux.dataset.etat)
   
    var vall=parseInt(jeux.dataset.l)
    var valc=parseInt(jeux.dataset.l)
    var ligne=jeux
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
        
        if ($(vall+''+valc).dataset.jeux==joueur && $(vall+''+valc).dataset.etat!='maty') {
           
            l.push(jeux.dataset.l)
                c.push(jeux.dataset.c)
                premier=$(vall+''+valc)
            if ($(vall+''+valc).id==init.id ) {
                
                testes=true
            }
            else{
                $(vall+''+valc).dataset.pd=nd
              $(vall+''+valc).dataset.nd='d'
              mandroso(init,$(vall+''+valc),joueur,nd,'d')
            }
           
        }
        else{
            
            if (nd=='d') {
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
            }
            
        }
        
    }
    else{
       
        if(nd=='d'){
            const vald=parseInt(jeux.dataset.c)+1// iteration droite
           
            if (pd=='g') {
                jeux.dataset.nd='hd'
                mandroso(init,jeux,joueur,pd,'hd')
               
            }
            else if ($(jeux.dataset.l+''+vald).dataset.jeux==joueur && $(jeux.dataset.l+''+vald).dataset.etat!='maty') {
               
                l.push(jeux.dataset.l)
                c.push(jeux.dataset.c)
                
                if ($(jeux.dataset.l+''+vald).id==init.id) {
                    // if (init.dataset.jeux=='red') {
                    //     icolor='black'
                    // }
                    // else{
                    //  icolor='red'
                    // }
                    // test(jeux,premier,l,c,icolor)
                    dernier=jeux
                    testes=true
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
       else if(nd=='hd'){
        
            const lvalhd=parseInt(jeux.dataset.l)-1// iteration ligne 
            const cvalhd=parseInt(jeux.dataset.c)+1// iteration colonne
            if (pd=='bg') {
                jeux.dataset.nd='h'
                mandroso(init,jeux,joueur,pd,'h')
            }
            else if ($(lvalhd+''+cvalhd).dataset.jeux==joueur && $(lvalhd+''+cvalhd).dataset.etat!='maty') {
                
                l.push(jeux.dataset.l)
                c.push(jeux.dataset.c)
                if ($(lvalhd+''+cvalhd).id==init.id ) {
                    // if (init.dataset.jeux=='red') {
                    //     icolor='black'
                    // }
                    // else{
                    //  icolor='red'
                    // }
                    // test(jeux,premier,l,c,icolor)
                    // alert(testes)
                    testes=true
                    dernier=jeux

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
        else if(nd=='h'){
            const lvalh=parseInt(jeux.dataset.l)-1// iteration ligne 
            const cvalh=parseInt(jeux.dataset.c)// iteration colonne
            if (pd=='b') {
                jeux.dataset.nd='hg'
                mandroso(init,jeux,joueur,pd,'hg')
            }
            else if ($(lvalh+''+cvalh).dataset.jeux==joueur && $(lvalh+''+cvalh).dataset.etat!='maty') {
                l.push(jeux.dataset.l)
                c.push(jeux.dataset.c)
                
                if ($(lvalh+''+cvalh).id==init.id) {
                    // if (init.dataset.jeux=='red') {
                    //     icolor='black'
                    // }
                    // else{
                    //  icolor='red'
                    // }
                    // test(jeux,premier,l,c,icolor)
                    
                    testes=true
                    dernier=jeux
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
        else if(nd=='hg'){
            
            const lvalhg=parseInt(jeux.dataset.l)-1// iteration ligne 
            const cvalhg=parseInt(jeux.dataset.c)-1// iteration colonne
            if (pd=='bd') {
                jeux.dataset.nd='g'
                mandroso(init,jeux,joueur,pd,'g')
            }
            else if ($(lvalhg+''+cvalhg).dataset.jeux==joueur && $(lvalhg+''+cvalhg).dataset.etat!='maty') {
                l.push(jeux.dataset.l)
                c.push(jeux.dataset.c)
                
                if ($(lvalhg+''+cvalhg).id==init.id ) {
                    // if (init.dataset.jeux=='red') {
                    //     icolor='black'
                    // }
                    // else{
                    //  icolor='red'
                    // }
                    // test(jeux,premier,l,c,icolor)
                    testes=true
                    dernier=jeux
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
        else if(nd=='g'){
            const lvalg=parseInt(jeux.dataset.l)// iteration ligne 
            const cvalg=parseInt(jeux.dataset.c)-1// iteration colonne
            if (pd=='d') {
                jeux.dataset.nd='bg'
                mandroso(init,jeux,joueur,pd,'bg')
            }
            else if ($(lvalg+''+cvalg).dataset.jeux==joueur && $(lvalg+''+cvalg).dataset.etat!='maty') {
                
                l.push(jeux.dataset.l)
                c.push(jeux.dataset.c)
               
                if ($(lvalg+''+cvalg).id==init.id ) {
                    // if (init.dataset.jeux=='red') {
                    //     icolor='black'
                    // }
                    // else{
                    //  icolor='red'
                    // }
                  
                //    test(jeux,premier,l,c,icolor)
                testes=true
                dernier=jeux
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
        else if(nd=='bg'){
            const lvalbg=parseInt(jeux.dataset.l)+1// iteration ligne 
            const cvalbg=parseInt(jeux.dataset.c)-1// iteration colonne
            if (pd=='hd') {
                jeux.dataset.nd='b'
                mandroso(init,jeux,joueur,pd,'b')
            }
            else if ($(lvalbg+''+cvalbg).dataset.jeux==joueur && $(lvalbg+''+cvalbg).dataset.etat!='maty') {
                l.push(jeux.dataset.l)
                c.push(jeux.dataset.c)
               
                if ($(lvalbg+''+cvalbg).id==init.id ) {
                    // if (init.dataset.jeux=='red') {
                    //     icolor='black'
                    // }
                    // else{
                    //  icolor='red'
                    // }
                    // test(jeux,premier,l,c,icolor)
                    testes=true
                    dernier=jeux
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
        else if(nd=='b'){
            const lvalb=parseInt(jeux.dataset.l)+1// iteration ligne 
            const cvalb=parseInt(jeux.dataset.c)// iteration colonne
            if (pd=='h') {
                jeux.dataset.nd='bd'
                mandroso(init,jeux,joueur,pd,'bd')
            }
            else if ($(lvalb+''+cvalb).dataset.jeux==joueur && $(lvalb+''+cvalb).dataset.etat!='maty') {
                l.push(jeux.dataset.l)
                c.push(jeux.dataset.c)
               
                if ($(lvalb+''+cvalb).id==init.id ) {
                    // if (init.dataset.jeux=='red') {
                    //     icolor='black'
                    // }
                    // else{
                    //  icolor='red'
                    // }
                    // test(jeux,premier,l,c,icolor)
                    testes=true
                    dernier=jeux
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
        else if(nd=='bd'){
            
            const lvalbd=parseInt(jeux.dataset.l)+1// iteration ligne 
            const cvalbd=parseInt(jeux.dataset.c)+1// iteration colonne
            if (pd=='hg') {
                miverina(init,jeux,joueur,pd,nd)
            }
            else if ($(lvalbd+''+cvalbd).dataset.jeux==joueur && $(lvalbd+''+cvalbd).dataset.etat!='maty') {
                l.push(jeux.dataset.l)
                c.push(jeux.dataset.c)
               
                if ($(lvalbd+''+cvalbd).id==init.id ) {
                    // if (init.dataset.jeux=='red') {
                    //     icolor='black'
                    // }
                    // else{
                    //  icolor='red'
                    // }
                    // test(jeux,premier,l,c,icolor)
                    testes=true
                    dernier=jeux
                }
                else{
                    $(lvalbd+''+cvalbd).dataset.pd='bd'
                    $(lvalbd+''+cvalbd).dataset.nd='d'
                    mandroso(init,$(lvalbd+''+cvalbd),joueur,'bd','d')
                }
                
            }
            else{
                if (pd=='') {
                    testes=false
                }
                else {
                    miverina(init,jeux,joueur,pd,nd)
                }
            }
        }
    }
    
}
function miverina(init,jeux,joueur,pd,nd){
    // alert('miverina: '+pd+' et ')
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
    alert(je.id+' '+pr.id+' '+lign+' '+coln+' '+icol)
    var lig=new Object()
    var li=[]
    var li=[...new Set(lign)]
    li=li.sort(compare)
    for (let i = 0; i < li.length; i++) {
        lig[li[i]]=[]
       
    }
    for (let i = 0; i < lign.length; i++) {
        lig[lign[i]].push(coln[i])
        lig[lign[i]].sort(compare)
    }
    
    for (let i = 0; i < li.length; i++) {
        for (let j = Math.min(...lig[li[i]]); j < Math.max(...lig[li[i]])+1; j++) {
           if ( $(li[i]+''+j).dataset.jeux == icol) {
            $(li[i]+''+j).dataset.etat='maty'
               point=point+1
           }
            
        }
       
    }
    alert(point)
    if (point!=0 && pr.id!=je.id) {
        testes2=true
    }
    else{
        l.length=0
        c.length=0
        testes2=false
    }
}
function ligne(ligne,colonne,color) {
        var rot=0
       var left=0
       var top=0
    
    for (let i = 0; i < ligne.length; i++) {
        
        
        var ligneog=document.createElement('div')
        ligneog.className=color
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

