object={
    name:"Nuru",
}
function myName(name){
console.log('my name is  '+this.name)
}
myName.call(object)