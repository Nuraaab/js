const object ={
    
[Symbol.iterator]: function(){
    let step=0
 const obj = {
 
next: function(){
    step=step+1
    if(step==1){
        return {value:'Nuru',done:false}
    }else if(step==2){
        return {value:'Ahmed',done:false}
    }
    return {value:undefined ,done:true}
}
 }
return obj
}
}
for (item of object){
    console.log(item)
}