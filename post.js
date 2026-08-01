// request function

// No 1


let modal = document.querySelector('.dialog')
let erromssg = document.querySelector('.erromssg')

let content = document.getElementById('contents')
let btn = document.querySelector('.btn')
let cancelBtn = document.querySelector('.cancelBtn')
let updt2 = document.querySelector('.updBtn2')
let dlt = document.querySelector('.deletBtn')


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
     erromssg.innerText = e.message
    modal.showModal()
    cancelBtn.addEventListener('click', ()=>{
        modal.close()
    })
   }
} 


let title = 'First Request';
let id = 2
let mssg = 'Initial content'


btn.addEventListener('click', ()=>{
    newPost(id, title, mssg).then(response =>{

    content.innerHTML += `
    <div class="border border-amber-800 p-5 rounded-2xl">
    <p class="text-lg font-bold">User ID: ${response.userId}</p>
    <h1 class="text-3xl py-2">Title: ${response.title}</h1>
    <p class="text-xl">Body: ${response.body}</p>
    </div>
    `

})
})


// No 2


let btn2 = document.querySelector('.updBtn')

const updatePost = async (id, title, message) =>{
   try{
     let request = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
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
    erromssg.innerText = e.message
    modal.showModal()

    cancelBtn.addEventListener('click', ()=>{
        modal.close()
    })
   }
} 


let title1 = 'Second Reques';
let id2 = 2
let mssg3 = 'Updated text'


  btn2.addEventListener('click', ()=>{

      updatePost(id2, title1, mssg3).then(response =>{

    content.innerHTML += `
    <div class="border border-amber-800 p-5 mt-5 rounded-2xl">
    <p class="text-lg font-bold">User Id: ${response.userId}</p>
    <h1 class="text-3xl py-2">Title: ${response.title}</h1>
    <p class="text-xl">Body:${response.body}</p>
    </div>
    `

})
  })


let id5 =2
let titl = 'Update'
const fetch1 = async (body)=>{
     try{
     let request = await fetch(`https://jsonplaceholder.typicode.com/posts/${id5}`, {
        method: "PATCH",
        body: JSON.stringify({
            body: String(body)
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
    erromssg.innerText = e.message
    modal.showModal()

    cancelBtn.addEventListener('click', ()=>{
        modal.close()
    })
   }

}

let title2 = 'Patched post'
let body2 = 'A patched post'


updt2.addEventListener('click', () =>{
      fetch1(titl).then(response =>{

    content.innerHTML += `
    <div class="border border-amber-800 p-5 mt-5 rounded-2xl">
    <p class="text-lg font-bold">User ID: ${response.userId}</p>
    <h1 class="text-3xl py-2">Title: ${response.title = title2}</h1>
    <p class="text-xl">Body: ${response.body = body2}</p>
    </div>
    `
      })})




const deleteFet = async (id) => {
     try{
     let request = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE"
    })

    if(!request.ok){
        throw new Error(`HTTP Error: ${request.status}`)
    }} catch(e){
    erromssg.innerText = e.message
    modal.showModal()

    cancelBtn.addEventListener('click', ()=>{
        modal.close()
    })
   }

}

let id4 = 2

let head = document.querySelector('.heading')

dlt.addEventListener('click', () =>{
      deleteFet(id4).then(res =>{
        head.innerText = 'Success'
            erromssg.innerText = `Post of ID ${id4} Successfully deleted`
            modal.showModal()

    cancelBtn.addEventListener('click', ()=>{
        modal.close()
    })
    
    })
})