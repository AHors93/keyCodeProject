document.addEventListener('keydown', () => {
    heading.textContent = (event.keyCode)
})

const heading = document.getElementById('text-display')

heading.textContent = 'Number';


document.addEventListener('keydown', () => {
    newBox.textContent = (event.key)
})

const newBox = document.getElementById('box 1')

newBox.textContent = 'Letter Display';

