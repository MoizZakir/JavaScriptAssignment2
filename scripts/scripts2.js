function Searching(array,serElem, index = 0) {
   
    if (index >= array.length) {
      return false;
    }
    if (array[index] === serElem) {
      return true;
    }
  
    return Searching(array, serElem, index+1 );
  }
  
  
  const fruits = ['apple','banana','orange','mango']
  
  const result1 = Searching(fruits, 'mango');
  const result2 = Searching(fruits, 'pineapple');
  console.log(result1); 
  console.log(result2);
  