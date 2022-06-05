function campoPesquisa(){
    var tema = document.getElementById('pesquisa').value;
    tema = tema.toLowerCase();

    if(tema!="" && tema!=" "){
        if(tema =="mulher maravilha" || 
            tema =="mulher" || tema =="maravilha"){
            location.replace('maravilha.html','_self'); 
        }else if(tema=="homem aranha" || 
            tema =="homem" || tema =="aranha"){
            location.replace('aranha.html','_self'); 
        }
        else if(tema=="batman"){
            location.replace('batman.html','_self'); 
        }else{
            location.replace('paginaNaoEncontrado.html','_self');
        }
    }
    
}
