/* alert("Hi Rizve"); */
/* console.log("Hello Javascript") */
/* let a = 25
let b = 20
let c = a+b

console.log(c) */

/* let heros = ["rizwan","khelgi","papu"]

for(let i of heros){
    console.log(i)
} */
/* let name = ["rizwan","adnan","ali","adan"]

console.log(name)
name.splice(2,2,"waqar")
console.log(name) */
/* 
let num = [1,2,3,4,5,6,7]
for(let i=0; i<5; i++){
   console.log("love you jan")
}  */
/* let num = [1,2,3,4,5,6]
for(let i=0; i<num.lenght; i++){
    console.log(num[i]);
} */

/* let student = {
    name: "rizwan",
    roll_no:12345,
    class:"10th"
}
for(let i in student){
    console.log(`${i} : ${student[i]}`);
}  */
/* function plus(a,b) {
    console.log(a+b)
}
plus(12,12) */
/* let count = 0
let value = "naveedahmed"
for(let val of value){
    if(val === "a" || 
       val === "i" ||
       val === "o" ||
       val === "u" ||
       val === "e") {
        count++
    }
    
}
console.log(count) */

let head = document.querySelector(".head");
let btn = document.querySelector(".btn");
let togal = true



btn.addEventListener("click" , () => {
    if(togal === true) {
       togal = false
        head.style = "color:yellow";
        
    }
    else {
        togal = true
        head.style = "color:black";
    }
}); 
    

