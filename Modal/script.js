// varriables
const modal = document.querySelector('.modal'),
    btn = document.querySelector('.btn'),
    modalContent = document.querySelector('.modal-content'),
    close = document.querySelector('.close');

btn.addEventListener('click', openModal);
close.addEventListener('click',closeModal);
modal.addEventListener('click', closeModal);

// open Modal
function openModal(e) {
    e.preventDefault();
    modal.style.display='block'

}
function closeModal() {
    modalContent.classList.add('slide-up')
    
    setTimeout(() => {
        modal.style.display = "none";
        modalContent.classList.remove('slide-up')
   },500)
  

}

    


