const bigImg = document.getElementById("b-img");
const smImg = document.getElementsByClassName("c-img");

smImg[0].onclick = function(){
    bigImg.src = smImg[0].src
}

smImg[1].onclick = function(){
    bigImg.src = smImg[1].src
}

smImg[2].onclick = function(){
    bigImg.src = smImg[2].src
}

smImg[3].onclick = function(){
    bigImg.src = smImg[3].src
}