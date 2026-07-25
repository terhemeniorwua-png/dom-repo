// request function


let content = document.getElementById('contents')
let btn = document.querySelector('.btn')
const newPost = async () =>{
   try{
     let request = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify({
            userId: 1,
            title: 'FIrst request',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus corporis illo, esse laboriosam, deserunt, id veniam quo natus libero voluptatem fugiat ut doloremque nobis laudantium vitae nulla blanditiis amet sequi.'
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
    console.log(e.message)
   }
} 

btn.addEventListener('click', ()=>{
    newPost().then(response =>{

    content.innerHTML = `
    <div class="bg-amber-100 p-5">
    <p class="text-3xl font-bold">${response.userId}</p>
    <h1 class="text-3xl py-2">${response.title}</h1>
    <p>${response.body}</p>
    </div>
    `

})
})