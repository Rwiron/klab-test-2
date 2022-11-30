const item = [
    {name : 'Bike',  price:100},
    {name : 'Tv',  price:200},
    {name : 'Album',  price:10},
    {name : 'Book',  price:5},
    {name : 'Phone',  price:500},
    {name : 'computer',  price:1000},
    ]


    const total = item.reduce((currentTotal,item)=>{
        return item.price + currentTotal
    },0)


    console.log(total)