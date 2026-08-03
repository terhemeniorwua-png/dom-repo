
let button = document.querySelector('#button');
let searchBar = document.querySelector('#searchBar')
let list = document.querySelector('ul')
let listCount = document.querySelector('.listCount')

let timeStamp = task =>{
    setTimeout(() =>{
        task.classList.toggle('italic')
        task.classList.toggle('line-through')
    }, 5000)
}


let tasks = new Set()


const addtask = () =>{

    let inputVal = searchBar.value
    if(inputVal.trim() === ''){
        alert('Input a task')
    } else{

    tasks.add(inputVal)

        let newElement = document.createElement('li');
        newElement.classList.add(
            'flex',
            'items-center',
            'justify-between'
        )

        let newChildElemet = document.createElement('p');
        newChildElemet.textContent = inputVal;
        newElement.appendChild(newChildElemet);

        // if(tasks.has(inputVal)){
        // alert('Task already exist');
        // return;
        // }

        let newBtn = document.createElement('button');
        newBtn.textContent = 'Delete';
        newBtn.id = 'button2'
        newElement.appendChild(newBtn);

listCount.innerHTML = tasks.size
        list.appendChild(newElement)

    timeStamp(newElement)

        searchBar.value = ""
      
    }
}

const editTask = e =>{
    let dbDlicked = e.target.closest('li');

    if(dbDlicked){
        console.log('double clicked')
    }
   
}

const deleteTask = e =>{


    const clicked = e.target.closest('#button2')
    const click = e.target.closest('li')
    
    if(clicked){
        const toBeRemoved = e.target.parentElement
        list.removeChild(toBeRemoved);

        const text = toBeRemoved.querySelector("p").textContent;
        tasks.delete(text)
        listCount.innerHTML = tasks.size
      
    } else if(click){
        click.classList.toggle('line-through')
    }
    
}



console.log(tasks)



list.addEventListener('dblclick', (e)=>{editTask(e)})

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