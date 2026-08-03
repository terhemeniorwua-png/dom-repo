let textarea = document.querySelector('form textarea');
let noteBtn = document.querySelector('#noteBtn');
let ul = document.querySelector('ul')

const getNoteValue = () => {

    const note = textarea.value

    const newElement = document.createElement('li');

    newElement.classList.add(
        'flex',
        'justify-between',
        'items-center'
    )

    const newChild = document.createElement('p')
    newChild.textContent = note
    newElement.appendChild(newChild);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete'
    newElement.appendChild(deleteBtn)

    ul.appendChild(newElement)

    textarea.value = ''
}





noteBtn.addEventListener('click', getNoteValue)