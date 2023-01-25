
let number = Number(prompt("duriin too ogno uu"))

let a , b ,temp = 0;
b = number;


while(number > 0){
    a = number % 10;
    number = parseInt(number / 10);
    temp = temp * 10 + a;
}

if( temp == b){
    alert("palindrome too")
} else{
    alert("palindrome too bish")
}

