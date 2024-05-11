class Book {
  constructor(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.books = [new Book("Holly Black", "Book of Night", "319", "true"),
    new Book("M. L. Wang", "The Sword of Kaigen: A Theonite War Story", "651", "false"),
    new Book("J. D. Barker and James Patterson", "The Coast-to-Coast Murders", "576", "true")];
  }

  addBook(author, title, pages, read) {
    const newBook = new Book(author, title, pages, read);
    this.books.push(newBook);
  }

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  publishLibrary() {
    container.innerHTML = '';
  
    this.books.forEach(book => {
      const row = document.createElement("tr");
      row.classList.add("book-info");
  
      // author
      const authorCell = document.createElement("td");
      authorCell.textContent = book.author;
      row.appendChild(authorCell);
  
      // title
      const titleCell = document.createElement("td");
      titleCell.textContent = book.title;
      row.appendChild(titleCell);
  
      // pages
      const pagesCell = document.createElement("td");
      pagesCell.classList.add("pages-cell");
  
      pagesCell.textContent = book.pages;
      row.appendChild(pagesCell);
  
      // read pages // checkbox input
      const readCell = document.createElement("td");
      readCell.classList.add("read-cell");
  
      const readCheck = document.createElement("input");
      readCheck.setAttribute("type", "checkbox");
  
      readCheck.checked = book.read === "true";
  
      readCell.appendChild(readCheck);
      row.appendChild(readCell);
  
      // delete
      const deleteCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.setAttribute("type", "button");
      deleteCell.classList.add("delete-cell");
      deleteButton.classList.add("delete-button");
  
      deleteButton.innerText = "x";
      deleteCell.appendChild(deleteButton);
      row.appendChild(deleteCell);
      
      deleteButton.addEventListener("click", e => {
        e.preventDefault();

        this.removeBook(book.title);
        row.remove();
      });
  
      container.appendChild(row);
    });
  }
}

const dialog = document.querySelector("dialog");
const new_book_button = document.querySelector("#new-book");
const close_button = document.querySelector("#close-button");
const submit_button = document.querySelector("submit-button");

const container = document.getElementById("book-table-container");
const form = document.getElementById("add-book-form");

const myLibrary = new Library();

function addBookToLibrary() {
  const authorValue = document.getElementById("author").value;
  const titleValue = document.getElementById("title").value;
  const pagesValue = document.getElementById("pages").value;
  const readValue = document.getElementById("read").checked ? "true" : "false";

  myLibrary.addBook(authorValue, titleValue, pagesValue, readValue);

  form.reset();
  dialog.close();

  myLibrary.publishLibrary();
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

function initialize() {
  myLibrary.publishLibrary();
  newBookForm();
}

initialize();