var menu=document.getElementById("menu");
     //menu.style.display="block";
var contador=0;
    menu.addEventListener("click",function (e){contador++;});
    menu.addEventListener("click",contar)
    function contar(e){
    	
    if(contador===1){
    	mostrar()
    }
    else if(contador===2){
              ocultar()
              contador=0;
              menu.style.display="block";
    }
}
    function mostrar(){
    	var list =document.getElementsByClassName("ocultar");
    	var ul=document.getElementsByTagName("ul")[0];
    	    ul.style.flexDirection="column";
    	    ul.style.marginLeft="270px";
    	    ul.style.fontSize="10px";
    	    menu.style.display="flex";
    	    menu.style.marginTop="-200px";
    		for(var i=0;i<list.length;i++){
    	 list[i].style.display="block";
    	}
}
    function ocultar(){
	var list=document.getElementsByClassName("ocultar");
	for (var i = 0; i<list.length; i++) {
		list[i].style.display="none";
		contador=0;
		menu.style.display="block";
		menu.style.marginLeft="-200px";
	}
}
    	

    