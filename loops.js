function forLoop(foo){
    for(var i = 0; i < 25; i++){
      if(i === 1){
        var bar = [...foo, 'I am 1 strange array']
      }
      else{
        var bar = [...foo, 'I am ${i} strange loops']
      }
      return bar
    }
}
