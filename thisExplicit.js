object={
    name:"Nuru",
}
function myName(name){
console.log('my name is  '+this.name)
}
//I have no idea how this works
myName.call(object)