function SaveObj(key, object) {
    
  let ToString = JSON.stringify(object);
  
    // Store the JSON string in localStorage using the provided key
    localStorage.setItem(key, ToString);
    
  }
  
  // Example usage
  const key = 'Student';
  const FirstObject = { Name: 'Moiz', RollNo: 1234 ,Class:'JavaScript' };
  SaveObj(key, FirstObject);
let a =localStorage.getItem('Stuudent')
console.log(a);