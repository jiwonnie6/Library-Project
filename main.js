const dialog = document.querySelector("dialog");
const new_book_button = document.querySelector("#new-book");
const close_button = document.querySelector("#close-button");
const submit_button = document.querySelector("submit-button");

const container = document.getElementById("book-table-container");
const form = document.getElementById("add-book-form")

const myLibrary = [
  new Book("Holly Black", "Book of Night", "319", "true"),
  new Book("M. L. Wang", "The Sword of Kaigen: A Theonite War Story", "651", "false"),
  new Book("J. D. Barker and James Patterson", "The Coast-to-Coast Murders", "576", "true")
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
  readValue = document.getElementById("read").checked ? "true" : "false";

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

      const index = myLibrary.findIndex(book => book.title === titleCell.textContent);

      if (index !== -1) {
        myLibrary.splice(index, 1);
      }

      row.remove();
    });

    container.appendChild(row);
  });
}


function initialize() {
  publishLibrary(myLibrary);
  newBookForm();
}

initialize();



