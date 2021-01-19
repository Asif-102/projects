var student = { id:121, phone:1745, name:'Abir'};
var student2 = {id:131, phone:457, name:'Mahi'};

console.log(student);
console.log(student2);

var phoneNo = student.phone;//object element access method

var Name = student2["name"];//object element access method

student2.phone=547854;//update phone number

console.log(phoneNo);
console.log(Name);

student2.cinema = "Ogni2";//add a new element

console.log(student2)