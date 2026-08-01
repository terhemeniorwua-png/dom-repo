
let button = document.querySelector('#button');
let searchBar = document.querySelector('#searchBar')
let list = document.querySelector('ul')

const addItem = () =>{

    let newElement = document.createElement('li');
    newElement.className = 'pDiv'

    let newitem = document.createElement('span');
    newitem.textContent = searchBar.value
    newElement.appendChild(newitem);
   

    let newBtn = document.createElement('button');
    newBtn.textContent = 'Delete';
    newBtn.className = 'delete'
    newElement.appendChild(newBtn)


 list.appendChild(newElement)
    
    searchBar.value = ''
}


function deleteItems(e){

    if(e.target.className == 'delete'){
        let li = e.target.parentElement;    
        list.removeChild(li)
    }
}




button.addEventListener('click', addItem)

list.addEventListener('click', (e)=>{deleteItems(e)})