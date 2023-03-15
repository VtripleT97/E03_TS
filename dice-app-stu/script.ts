function demo(): void {
    let input: HTMLInputElement = <HTMLInputElement>document.getElementById("img-name");
    let Ketqua: string = input.value;

    let image1: HTMLImageElement = <HTMLImageElement>document.getElementById("dice-1");
    image1.src = "./img/" + Ketqua;
    

}

function roll(): void {
    const max: number = 6;
    const min: number = 1;

    let a: number = Math.floor(Math.random() * (max - min + 1)) + min;
    let b: number = Math.floor(Math.random() * (max - min + 1)) + min;

    let imageO: HTMLImageElement = <HTMLImageElement>document.getElementById("dice-1");
    let imageT: HTMLImageElement = <HTMLImageElement>document.getElementById("dice-2");
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