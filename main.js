const dialog = document.querySelector("dialog");
const new_book_button = document.querySelector("#new-book");
const close_button = document.querySelector("#close-button");
const submit_button = document.querySelector("submit-button");

const container = document.getElementById("book-table-container");
const form = document.getElementById("add-book-form")

const myLibrary = [
  new Book("Holly Black", "Book of Night", "319", "read"),
  new Book("M. L. Wang", "The Sword of Kaigen: A Theonite War Story", "651", "read"),
  new Book("J. D. Barker and James Patterson", "The Coast-to-Coast Murders", "576", "read")
];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function newBookForm() {
  new_book_button.addEventListener("click", () => {
    dialog.showModal();
  });

  close_button.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
    form.reset();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    addBookToLibrary();
  });
}

function addBookToLibrary() {
  authorValue = document.getElementById("author").value;
  titleValue = document.getElementById("title").value;
  pagesValue = document.getElementById("pages").value;
  readValue = document.getElementById("read").value;

  myLibrary.push(new Book(authorValue, titleValue, pagesValue, readValue));

  form.reset();
  dialog.close();

  publishLibrary(myLibrary);
}

function publishLibrary(books) {
  container.innerHTML = '';

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
    pagesCell.classList.add("pages-cell");
    row.appendChild(pagesCell);

    const readCell = document.createElement("td");
    readCell.textContent = book.read;
    readCell.classList.add("read-cell");
    row.appendChild(readCell);

    container.appendChild(row);
  });
}

function initialize() {
  publishLibrary(myLibrary);
  newBookForm();
}

initialize();



