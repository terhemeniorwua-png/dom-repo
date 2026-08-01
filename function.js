
let button = document.querySelector('#button');
let searchBar = document.querySelector('#searchBar')
let list = document.querySelector('ul')

const addItem = () =>{

    let newElement = document.createElement('div');
    newElement.className = 'pDiv'

    let newitem = document.createElement('span');
    newitem.textContent = searchBar.value
    newElement.appendChild(newitem);
   

    let newBtn = document.createElement('button');
    newBtn.textContent = 'Delete';
    newElement.appendChild(newBtn)


 list.appendChild(newElement)
    
    searchBar.value = ''
}



button.addEventListener('click', addItem)