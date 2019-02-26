function forLoop(foo){
    for(var i = 0; i < 25; i++){
      if(i == 1){
        var bar = foo.push('I am 1 strange loop.')
      }
      else{
        var bar = foo.push(```I am ${i} strange loops```)
      }
      return bar
    }
}
