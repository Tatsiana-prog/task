//подключение модального окна
const modalIcon = document.querySelector('.modal-icon');
const modal = document.querySelector('.modal');
const subBtn = document.querySelector('.button');
const resetBtn = document.querySelector('.btn-reset');

modalIcon.addEventListener('click', function () {
  this.classList.toggle('modal-icon--active');
  modal.classList.toggle('modal--active');
  overlay.classList.toggle('overlay--active');
  document.body.style.overflow = "hidden"; 
});

subBtn.addEventListener('click', e => {
  modal.classList.toggle('modal--active');
  overlay.classList.remove('overlay--active');
  modalIcon.classList.remove('modal-icon--active');
  document.body.style.overflow = "";
  

});

resetBtn.addEventListener('click', e => {
  modal.classList.toggle('modal--active');
  overlay.classList.remove('overlay--active');
  modalIcon.classList.remove('modal-icon--active');
  document.body.style.overflow = "";
});

 //закрытие модального окна по клику вне области окна
 overlay.addEventListener('click', e => {
  if (e.target === overlay) {
    modal.classList.remove('modal--active');
    overlay.classList.remove('overlay--active');
    modalIcon.classList.remove('modal-icon--active');
    document.body.style.overflow = "";
  }
});
