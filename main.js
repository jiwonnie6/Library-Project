const myLibrary = [
  new Book("Holly Black", "Book of Night", "319", "read"),
  new Book("M. L. Wang", "The Sword of Kaigen: A Theonite War Story", "651", "read"),
  new Book("J. D. Barker and James Patterson", "The Coast-to-Coast Murders", "576", "read")
];

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
  const submit_button = document.querySelector("submit-button")

  new_book_button.addEventListener("click", () => {
    dialog.showModal();
  });

  close_button.addEventListener("click", () => {
    dialog.close();
  });

  // submit_button.addEventListener
}

function publishLibrary(books) {

  const container = document.getElementById("book-table-container");

  books.forEach(book => {
    const row = document.createElement("tr");
    row.classList.add("book-info");

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;
    row.appendChild(authorCell);

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    const pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;
    row.appendChild(pagesCell);

    const readCell = document.createElement("td");
    readCell.textContent = book.read;
    row.appendChild(readCell);

    container.appendChild(row);
  });
}

publishLibrary(myLibrary);

newBookForm();