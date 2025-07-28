function personInfo(){
    console.log(`Name: ${this.name}, Age ${this.age}`)
}

let person = {
    name:"vikas",
    age : 29
}

personInfo.call(person);