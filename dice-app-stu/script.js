function demo() {
    var input = document.getElementById("img-name");
    var Ketqua = input.value;
    var image1 = document.getElementById("dice-1");
    image1.src = "./img/" + Ketqua;
}
function roll() {
    var max = 6;
    var min = 1;
    var a = Math.floor(Math.random() * (max - min + 1)) + min;
    var b = Math.floor(Math.random() * (max - min + 1)) + min;
    var imageO = document.getElementById("dice-1");
    var imageT = document.getElementById("dice-2");
    imageO.src = "./img/dice" + a + ".png";
    imageT.src = "./img/dice" + b + ".png";
}
// const value =[
//     {id: '1', src: "./img/dice1.png"},
//     {id: '2', src: "./img/dice2.png"},
//     {id: '3', src: "./img/dice3.png"},
//     {id: '4', src: "./img/dice4.png"},
//     {id: '5', src: "./img/dice5.png"},
//     {id: '6', src: "./img/dice6.png"},
// ]
