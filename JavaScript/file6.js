//arrow function
// greet() //hoisting
// function greet(){
//     console.log("Hello")
// }

// x=10
// console.log(x) //10, because of hoisting
// var x

// const greet =10
// console.log(greet) //10, because of hoisting

//hoisting does not work with arrow functions
// const greet=()=> {
//     console.log("Hello")
// }
// greet()


// const add=(a,b)=> {
//     console.log(a+b)
// }
// add(4,5)

// const add=(a,b)=> {
//     return a+b
// }
// const result=add(4,5)
// console.log(result)

//callback function
// const f1 =()=>{
//     console.log("hello")
// }
// // const f1=10
// const main=(x)=>{
//     console.log(x)
// }
// main(f1)

const add=(...a)=>{
    console.log(a)
}
add(4,5,6,7,8)