/* var data=2999
let name1="gagan"
const b=99
let d=true;
console.log(typeof data )
console.log(typeof name1)
console.log(typeof b)
console.log(typeof d) */

//array
/* let data=[1,2,3,4,5]
console.log(data[0])
console.log(data[1])
console.log(data[2])
console.log(data[3])
console.log(data[4]) */

//Object
/* let data={
    name:"Gagan",
    age:21,
salary:40000}
console.log(data.name)
console.log(data.age)
console.log(data.salary) */

//Functions
/* function data(n1){
    console.log(n1)
}
data(1000) */

/* function we(c1) {
  return c1 + 19999
}
let one = we(1000)
console.log(one) */

//CONDITIONAL STATEMENTS

//if if-else if-else if-else
/* let marks=8;
if(marks>75){
    console.log("1st class")
}
else{
console.log("go home")
} */

/* let marks=40;
if(marks>75){
    console.log("1st class")
}
else if(marks>55){
console.log("go home")}
else{
    console.log("u finished")
} */

//LOOPING CONCEPT
//performing multiple times
//for while loop

/* for(intialization;condition;incr/decr){
//block code
} */
//FOR LOOP
/* let i=7
for(i=1;i<=7;i++){
    console.log(i)
} */

//WHILE LOOP
/* let i=0
while(i<=10){
    console.log(i)
    i++;
} */
/* console.log(i) */

//ARRAY
/* let data=[1,2,3,4,5,6,7]
console.log(Array.isArray(data)); */

//MAP() METHOD
/* let data=["gagan",'2',"manoj"]
data.map(
    function(element){
console.log(element)
    }
) */

/* let data = ['gagan', '2', 'manoj']
let out = data.map(function (element) {
  return element + 1
})
console.log(out) */

//FILTER ()
/* let data = [2,3,4,5,6,7,8]
let out = data.filter(function (element) {
  return element < 10
})
console.log(out) */

//FOR ECAH() METHOD

//STRINGIFY
/* let data={name:"gagan", age:23, gendr:"male"}
let ga=JSON.stringify(data)
console.log(ga) */

//DATE object
/* let date = new Date()
console.log(date.valueOf()) */

//ES6/ECMAScript 2015
//let,const,
//Arrow function
//classes
//for..of
//default parameter
//rest operater
//spread operater
//destructring

//LET CONST KEYWORD
//variable declaration keywords

//Let keyword
//we can't acces the data out side of the  block only acces inside the block
/* 
{
    let u=2000;
     console.log(u)
    }  */

/*  console.log(u); */

//CONST keyword
//we cant change or update the data value

/* const data=100
data=40
console.log(data); */

//ARROW FUNCTION ()=>{}
/* const user = (n1) => {
return n1 + 4
}
let out=user(29929)
console.log(out) */


//class 


/* class user{
    admin(){
console.log("hey everyone")
    }
    us(){
console.log("hey good morning")
    }
}
let obj=new user()
obj.admin()
obj.us() */


//if sends values to classes must use constructer method
/* class user{
    constructor(msg){
this.msg=msg
    }
    admin(){
console.log(this.msg)
    }
    us(){
console.log("hey good morning")
    }
}
let obj=new user("hey macha")
obj.admin()
obj.us() */


//for ...of method
