// request function

// No 1

let content = document.getElementById('contents')
let btn = document.querySelector('.btn')
const newPost = async (id, title, message) =>{
   try{
     let request = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify({
            userId: Number(id),
            title: String(title),
            body: String(message)
        }),
        headers: {
            "Content-Type":"application/json; charset=UTF-8"
        }
    })

    if(!request.ok){
        throw new Error(`HTTP Error: ${request.status}`)
    }

    let res =  await request.json()
    return res
   } catch(e){
    document.write(e.message)
   }console.log(e.message)
} 


let title = 'First Request';
let id = 2
let mssg = 'Loresm iijd dkfs s jfisk fjskkfskff'


btn.addEventListener('click', ()=>{
    newPost(id, title, mssg).then(response =>{

    content.innerHTML += `
    <div class="bg-amber-100 p-5">
    <p class="text-3xl font-bold">${response.userId}</p>
    <h1 class="text-3xl py-2">${response.title}</h1>
    <p>${response.body}</p>
    </div>
    `

})
})


// No 2

let btn2 = document.querySelector('.updBtn')

const updatePost = async (id, title, message) =>{
   try{
     let request = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        method: "PUT",
        body: JSON.stringify({
            userId: Number(id),
            title: String(title),
            body: String(message)
        }),
        headers: {
            "Content-Type":"application/json; charset=UTF-8"
        }
    })

    if(!request.ok){
        throw new Error(`HTTP Error: ${request.status}`)
    }

    let res =  await request.json()
    return res
   } catch(e){
    document.write(e.message)
   }console.log(e.message)
} 


let title1 = 'Second Request';
let id2 = 3
let mssg3 = 'Loresm iijd dkfs s jfisk fjskkfskff'


  btn2.addEventListener('click', ()=>{

      updatePost(id2, title1, mssg3).then(response =>{

    content.innerHTML += `
    <div class="bg-amber-100 p-5">
    <p class="text-3xl font-bold">${response.userId}</p>
    <h1 class="text-3xl py-2">${response.title}</h1>
    <p>${response.body}</p>
    </div>
    `

})
  })