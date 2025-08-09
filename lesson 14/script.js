const modal = document.querySelector('.modal')
const button = document.querySelector('.btn-open')
const close = document.querySelector('.modal__close-btn')

button.addEventListener('click', () => {
    modal.style.display = 'flex';
})

close.addEventListener('click', () => {
    modal.style.display = 'none';
})

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
})

