const myLibrary = [];

function Book(author, title, pages, read) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}


function newBookForm() {
  const dialog = document.querySelector("dialog");
  const new_book_button = document.querySelector("#new-book");
  const close_button = document.querySelector("#close-button");

  new_book_button.addEventListener("click", () => {
    dialog.showModal();
  });

  close_button.addEventListener("click", () => {
    dialog.close();
  });
}

newBookForm();