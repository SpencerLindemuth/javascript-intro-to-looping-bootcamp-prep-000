function forLoop(foo){
    for(var i = 0; i < 25; i++){
      var bar = [];
      if(i == 1){
        bar = [...foo, 'I am 1 strange loop']
        return bar
      }
      else{
        bar = [...foo, `I am ${i} strange loops`]
        return bar
      }
    }
}

function whileLoop(num){
  while(num > 0){
    num--;
    console.log(num)
  }
  return "done"
}

var x = 0;
function incrementVariable() {
  x = x + 1;
  return x;
}

function doWhileLoop(n){
  do{
    console.log('I run once regardless')
  } while(incrementVariable() <= n);
}
