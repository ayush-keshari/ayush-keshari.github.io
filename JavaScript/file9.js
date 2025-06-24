//array
// const score=[2,1,7,5,3]
// console.log(score)
// console.log(score[0])
// score.push(9)
// console.log(score)
// console.log(score.length)
// const newScore=[...score,9]
// console.log(newScore)

// const cart ={
//     1:5,
//     5:3,
// }
// const newCart=({...cart,2:1})
// console.log(newCart) // { '1': 5, '5': 3, '2': 1 }
// let cart={}
// const products=[
//     {id:1, name:"product1", price:25},
//     {id:2, name:"product2", price:50},
//     {id:3, name:"product3", price:75},
// ]
// const newProducts=[...products, {id:4, name:"product4", price:56}]
// console.log(newProducts)
// function addToCart(id){
//     cart={...cart,[id]:1}
// }
// addToCart(1)
// addToCart(3)
// console.log(cart) 


// const score=[2,1,7,5,3]
// score.forEach((value)=>{
//     console.log(value)
// })

// score.forEach((index)=>{
//     console.log(index)
// })

// score.forEach((a,b,c)=>{
//     console.log(c[b])
// })
// score.map((value)=>{
//     console.log(value)
// })

// const newScore=score.map((value)=>{
//     return value+5
// })

// console.log(newScore)

// const newScore=score.filter((value)=>{
//     return value >2
// })
// console.log(newScore) // [7, 5, 3]

// const score=[2,1,7,5,3]

// const newScore=score.find((value)=>{
//     return value=== 2
// })
// console.log(newScore) 

// const score=[2,1,7,5,3]

// const newScore=score.reduce((sum, value)=>{
//     return sum + value
// },0)
// console.log(newScore) 


const score=[2,1,7,5,3]
const newScore=score.find((value)=>value=== 2
)
console.log(newScore) 