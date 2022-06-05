var acionado;
function AparecerMenu(obj){
    if(acionado == true)
    {
        obj.src="menu.png";
        acionado = false;
        var nav = document.getElementById("lista");
        nav.style.visibility = "visible";
    }
    else{
        obj.src="close.png";
        acionado = true;
        var nav = document.getElementById("lista");
        nav.style.visibility ="hidden";
    }
    

}