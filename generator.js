function*generatorFunction(){
    yield 'My name is Nuru'
}

const generatorOnject=generatorFunction()

for (item of generatorOnject){
    console.log(item)
}