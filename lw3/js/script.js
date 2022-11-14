const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const delet = document.querySelector('#delet')
const ready = document.querySelector('#ready')
const list = document.querySelector('#list')

btn.addEventListener('click', (e) => {
    if (input.value === '') return
    createDeleteElements(input.value)
    input.value = ''
})

function createDeleteElements(value) {
    console.log(value)
    const li = document.createElement('li')
    const delet = document.createElement('button')
    const ready = document.createElement('button')
    const div = document.createElement('div');
    li.className = 'li';
    li.textContent = value;
    delet.className = 'delet';
    delet.innerHTML = '<img src="./img/delete.svg">';
    li.appendChild(delet);
    ready.className = 'ready';
    ready.innerHTML = '<img src="./img/check-mark.svg">';
    li.appendChild(ready);

    delet.addEventListener('click', (e) => {
        list.removeChild(li)
    })

    ready.addEventListener('click', (e) => {
        li.classList.toggle('made')
    })

    list.appendChild(li)
    
}
