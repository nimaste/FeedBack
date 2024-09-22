var nota = 0 ;
function avaliar(valor){
    // colocando o caminho da imagem em uma array
    var imgs = [
  document.getElementById("s1"),
  document.getElementById("s2"),
  document.getElementById("s3"),
  document.getElementById("s4"),
  document.getElementById("s5")]
  // vendo o valor escolhido
    if (valor == 5){
        for (var i = 0; i < 5; i++){
            imgs[i].src = "img/estrela1.png";
        }
        nota = 4;
    }
    else if (valor == 4){
        for (var i = 0; i < 4; i++){
            imgs[i].src = "img/estrela1.png";
        }
        nota = 3;
    }
    else if(valor == 3){
        for(var i = 0; i < 3; i++){
            imgs[i].src = "img/estrela1.png";
    }
        nota = 2;
    }
    else if(valor==2){
        for(var i = 0; i < 2; i++){
            imgs[i].src = "img/estrela1.png";
        }
        nota= 1;
    }
    else{
        for(var i = 0; i < 1; i++){
            imgs[i].src = "img/estrela1.png";
    }
        nota=0;
    }
    for (var i = 0; i < 5; i++){
        if(i > nota){
            imgs[i].src = "img/estrela0.png";
        }
    }
    
}