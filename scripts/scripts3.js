function addnewElement(Txt){
let para=document.createElement("p")
para.innerText=Txt
para.style.position='absolute'
para.style.bottom='0px'
let body=document.querySelector('body');
body.appendChild(para);
}
addnewElement('Hello World');