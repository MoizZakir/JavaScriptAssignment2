function getData(key){
    let getObj=localStorage.getItem(key)
    let ParseString=JSON.parse(getObj)
    console.log(ParseString)

}
key='Student';
getData(key);