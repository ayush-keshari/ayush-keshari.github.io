//spread
let marks={
    maths:95,

}
marks={...marks,science:54}
console.log(marks); // This will log { maths: 95, science: 54 }

let students=["Harsh","Ananta","khusboo"]
students=[...students,"Azam"]
console.log(students); // This will log ["Harsh", "Ananta", "khusboo", "Azam"]