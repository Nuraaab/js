function person(fname,lname){
    this.firstname=fname
    this.lastname=lname
}

const p1=new person('Nuru','Ahmed')
const p2=new person('Ahmed','Ali')
person.prototype.getfull= function(){
    return this.firstname+'  '+this.lastname
}
function superFunction(fname,lname,age){
    this.superFunction=true;
    person.call(this,fname,lname)
    this.Age=age

}
superFunction.prototype.displayhello= function(){
    console.log('this is inheritance')
}
superFunction.prototype=Object.create(person.prototype)
superFunction.prototype.constructor=superFunction
const obj = new superFunction('Hello','World!!','   age =21')
console.log(obj.getfull()+obj.Age)
