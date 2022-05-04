const buttonPlus = document.getElementById('btnPlus');
const listContainer = document.getElementById('listContainer');
const inputField = document.getElementById('inputField');

buttonPlus.addEventListener('click', function(){
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    listContainer.appendChild(paragraph);
    inputField.value = '';
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through'
    })
    paragraph.addEventListener('dblclick', function(){
        listContainer.removeChild(paragraph);
    })
})
