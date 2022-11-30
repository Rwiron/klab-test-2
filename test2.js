
const item = [
    {name : 'Bike',  price:100},
    {name : 'Tv',  price:200},
    {name : 'Album',  price:10},
    {name : 'Book',  price:5},
    {name : 'Phone',  price:500},
    {name : 'computer',  price:1000},
    ]
    
let maxItem = item.reduce((max, min) => max.price > min.price ? max : min);

console.log(maxItem.name) //Chromebook 2
console.log(maxItem) //Full object
