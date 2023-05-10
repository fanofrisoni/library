const addButton = document.querySelector('#addbutton')
const modal = document.querySelector('#modal');
var form = document.getElementById('newbook');

let myLibrary = [];
class Book {
  constructor (author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }
  toggleReadd () {
    this.read = !this.read;
  }
}
// function Book (author, title, pages, read) {
//   this.author = author;
//   this.title = title;
//   this.pages = pages;
//   this.read = read;
// }
// Book.prototype.toggleReadd = function() {
//   this.read = !this.read;
// }
function toggleRead(index) {
  myLibrary[index].toggleReadd();
  render();
}
function render () {
  let bookgrid = document.getElementById('bookgrid');
  bookgrid.innerHTML = '';
  for(let i = 0; i<myLibrary.length;i++){
    let book = myLibrary[i];
    let bookEl = document.createElement('div');
    bookEl.classList.add('book');
    bookEl.innerHTML = `<h3>${book.title}</h3>
                        <h4>${book.author}</h4>
                        <p>${book.pages} pages</p>
                        <button data-id="0" id="remove" onclick="removeBook(${i})">Remove</button>
                        <button onclick="toggleRead(${i})">${book.read ? 'Read' : 'Not Read'}</button>`
    bookgrid.appendChild(bookEl);
  }
}
function removeBook (index){
  myLibrary.splice(index,1);
  render();
}

function addBook (neww) {
  myLibrary.push(neww);
  render();
}

form.onsubmit = (e) => {
  let id = 0
  modal.close();
  e.preventDefault();
  var newBook = new FormData(form);
  var newB = Object.fromEntries(newBook.entries());
  newB = Object.values(newB);
  if(newB[3]){
    newB[3] = true;
  } else {
    newB[3] = false;
  }
  id = new Book(newB[1],newB[0],newB[2],newB[3]);
  addBook(id);
  id++;
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