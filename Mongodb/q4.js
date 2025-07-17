db.employees.insertMany([
  {
    name: "Amy",
    email: "amy@gmail.com",
    department: "HR",
    salary: 2000,
    location: ["NY", "TX"],
    date: Date(),
  },
  {
    name: "Rafeal",
    email: "rafeal@gmail.com",
    department: "Admin",
    salary: 1500,
    location: ["OH", "TX"],
    date: Date(),
  },
  
]);
db.employees.insertOne({
   name: "Aman",
    email: "aman@gmail.com",
    department: "Admin",
    salary: 1500,
    location: ["OH", "TX"],
    date: Date(),
})


db.employees.find({department:{$in: ["Admin","HR"]}})
db.employees.find({department:{$nin: ["Admin","HR"]}})

db.employees.find().sort({name:1})   //accending order
db.employees.find().sort({name:-1})  //