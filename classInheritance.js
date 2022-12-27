class person{
    constructor(fnmae,lname){
        this.firstname=fnmae
        this.lastname=lname
    }
    getFullname(){
        return this.firstname+'  '+this.lastname
    }

}
const pc =new person('Nuru','Ahmed')
console.log(pc.getFullname())

class superClass extends person{
    constructor(fname,lname){
        super(fname,lname)
        this.superClass=true
    }
   
}
const sc = new superClass('Helloo ','World!!!')
console.log(sc.getFullname())