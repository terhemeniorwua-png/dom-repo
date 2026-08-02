
let button = document.querySelector('#button');
let searchBar = document.querySelector('#searchBar')
let list = document.querySelector('ul')

let timeStamp = task =>{
    setTimeout(() =>{
        task.classList.toggle('italic')
        task.classList.toggle('line-through')
    }, 5000)
}

const addtask = () =>{

    let inputVal = searchBar.value
    if(inputVal.trim() === ''){
        alert('Input a task')
    } else{

        let newElement = document.createElement('li');
        newElement.classList.add('flex')
        newElement.classList.add('items-center')
        newElement.classList.add('justify-between')

        let newChildElemet = document.createElement('p');
        newChildElemet.textContent = inputVal;
        newElement.appendChild(newChildElemet);

        let newBtn = document.createElement('button');
        newBtn.textContent = 'Delete';
        newBtn.id = 'button2'
        newElement.appendChild(newBtn);

        list.appendChild(newElement)

    timeStamp(newElement)

        inputVal = ""
    }
}


const deleteTask = e =>{
    const clicked = e.target.closest('#button2')
    if(clicked){
        const toBeRemoved = e.target.parentElement
        list.removeChild(toBeRemoved)
    }
}






button.addEventListener('click', addtask)

list.addEventListener('click', (e)=>{deleteTask(e)})













let count = document.querySelector('.count')
let increament = document.querySelector('#increase')
let decrease = document.querySelector('#Decrease')
let reset = document.querySelector('#Reset')

 
    
function changeNumber(e){

    let clicked = e.target;
    if(clicked.id === 'increase' || clicked.value == ' '){
        if(count.textContent == 10){
            alert('Limit reached')
            return
        }
        count.textContent = Number(count.textContent) + 1;

    } else if(clicked.id === 'Decrease'){
        if(count.textContent == -10){
            alert('Limit reached')
            return
        }
        count.textContent = Number(count.textContent) - 1;

    }  else if(clicked.id === 'Reset'){
        count.textContent = 0;

    } 

    // color change

    if(count.textContent > 0){
        count.style.color ='green'
    } if(count.textContent == 0){
        count.style.color = 'black'
    } if(count.textContent < 0){
        count.style.color = 'red'
    }
  
}


function resett(){
    count.textContent = 0;
    count.style.color = 'black'
}


count.addEventListener('dblclick', resett)


    increament.addEventListener('click', (e)=>{changeNumber(e)})
decrease.addEventListener('click', (e)=>{changeNumber(e)})
reset.addEventListener('click', (e)=>{changeNumber(e)})