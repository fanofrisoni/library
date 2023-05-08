const addButton = document.querySelector('#addbutton')
const modal = document.querySelector('#modal');

let myLibrary = [];

function Book (author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBook () {

}

addButton.addEventListener('click', () => {
  modal.showModal();
})

modal.addEventListener('click', e => {
  const dialogDimensions = modal.getBoundingClientRect()
  if(
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    modal.close();
  }
})