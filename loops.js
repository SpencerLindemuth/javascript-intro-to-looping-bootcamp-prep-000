function forLoop(foo){
    for(var i = 0; i < 25; i++){
      if(i == 1){
        var bar = [...foo, 'I am 1 strange loop']
        return bar
      }
      else{
        var bar = [...foo, `I am ${i} strange loops`]
        return bar
      }
    }
}

function whileLoop(num){
  while(num >= 0){
    num--;
    console.log(num)
  }
  return "done"
}
