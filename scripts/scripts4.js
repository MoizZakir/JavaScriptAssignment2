function addnewlist(items){
    let list =document.createElement("li")
    list.innerText=items
    list.style.fontSize='25px'
    let unorderlist=document.querySelector('ul');
    unorderlist.appendChild(list);
    }
    addnewlist('beef');
    addnewlist('Mutton');
    addnewlist('Chicken');