var nota = -1 ;
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
    else if(valor==1){
        for(var i = 0; i < 1; i++){
            imgs[i].src = "img/estrela1.png";
        }
            nota=0;
        }
    else{
        nota = -1
    }
    for (var i = 0; i < 5; i++){
        if(i > nota){
            imgs[i].src = "img/estrela0.5.png";
        }
    }
}
function enviarDados() { 
    let comentario = document.getElementById('input').value;
    let valor = nota + 1;

    if (comentario && valor >= 1) {
        // Fazendo a requisição POST para o backend
        fetch('http://localhost:3000/avaliar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ comentario: comentario, nota: valor })
        })
        .then(response => response.text())
        .then(data => {
            window.location.replace("templates/Finalização.html");

        })
        .catch(error => console.error('Erro:', error));

        // Resetar as estrelas e o campo de texto
        avaliar(-1);
        document.getElementById('input').value = "";
    } else {
        alert('Por favor, preencha sua análise e selecione uma nota!');
    }
}