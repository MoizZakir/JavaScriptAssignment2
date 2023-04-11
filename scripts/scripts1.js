function Closure(num1) {
    
    return function (num2) {
      
      console.log( num1 + num2);
    };
  }
  
    
  const innerfuction = Closure(5); 
innerfuction(5)
  