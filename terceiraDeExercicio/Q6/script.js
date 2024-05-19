function muda(caminho){
    var imgMa = document.getElementById('ma');
    imgMa.innerHTML = '';
    var img = document.createElement('img');
    img.src = caminho;
    imgMa.appendChild(img);
}