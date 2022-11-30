const item = [
{name : 'Bike',  price:100},
{name : 'Tv',  price:200},
{name : 'Album',  price:10},
{name : 'Book',  price:5},
{name : 'Phone',  price:500},
{name : 'computer',  price:1000},
]

const filterItems =item.filter((item)=>{
    return item.price <=100
})

console.log(filterItems);
// [