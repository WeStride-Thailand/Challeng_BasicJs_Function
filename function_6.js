function footballPoints(w ,d, l) {
    let win = w * 3
    let draw = d * 1
    let losses = l * 0
    return win + draw + losses
    
}

console.log(footballPoints(3,4,2));
console.log(footballPoints(5,0,2));
console.log(footballPoints(0,0,1));