
function add(a,b,c){
    return a+b+c
}
function curry(funct){
    return function (a){
        return function(b){
            return function(c){
                return funct(a,b,c)
            }

        }
    }
}
let afun = curry(add)
console.log(afun(3)(5)(8))