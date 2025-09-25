for (let i = 1; i <= 10; i++){
    console.log(i)
}
//

let x = 1;
let y = 5;

while ( x <= 10){
    console.log(`${y} X ${x} = ${x*y}`);
    x++;
}

//
let number = NaN;
do{
    number = Math.floor(Math.random() * 10) + 1;
    console.log(`Число: ${number}`)

}while (number != 7);

//
let multiply = 1;
do {
    console.log(`Число ${multiply}`)
    multiply = multiply * 2;
} while (multiply <= 100);
