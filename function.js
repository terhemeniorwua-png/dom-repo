
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



let count = document.querySelector('.count')
let increament = document.querySelector('#increase')
let decrease = document.querySelector('#Decrease')
let reset = document.querySelector('#Reset')

 
    
function changeNumber(e){

    let clicked = e.target;
    if(clicked.id === 'increase'){
        if(count.innerHTML == 10){
            alert('Limit reached')
            return
        }
        count.innerHTML = Number(count.innerHTML) + 1;

    } else if(clicked.id === 'Decrease'){
        if(count.innerHTML == -10){
            alert('Limit reached')
            return
        }
        count.innerHTML = Number(count.innerHTML) - 1;

    }  else if(clicked.id === 'Reset'){
        count.innerHTML = 0;

    } 

    // color change

    if(count.innerHTML > 0){
        count.style.color ='green'
    } if(count.innerHTML == 0){
        count.style.color = 'black'
    } if(count.innerHTML < 0){
        count.style.color = 'red'
    }
  
}


// if(increament)

//        if(count.innerHTML > 10){
//         alert('Limit reached')
//         increament.removeEventListener('click', (e)=>{changeNumber(e)})
        
//     } else if(count.innerHTML === -10){
//         decrease.removeEventListener('click', (e)=>{changeNumber(e)})
//     }
    increament.addEventListener('click', (e)=>{changeNumber(e)})
decrease.addEventListener('click', (e)=>{changeNumber(e)})
reset.addEventListener('click', (e)=>{changeNumber(e)})