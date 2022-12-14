let myLibrary = [];
let bookCounter = 0;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookIndex;
}

function addBook(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    newBook.bookIndex = bookCounter;
    bookCounter = bookCounter + 1;
    console.table(myLibrary);
}

function displayNewBook(myLibrary) {
    const libraryTable = document.getElementById("library-table");
    const row = document.createElement("tr");
    let item = myLibrary[myLibrary.length - 1];
    for (let prop in item) {
        //exclude bookIndex from being displayed in the table
        if (prop == 'bookIndex') {
            continue;
        }
        console.log(item[prop]);
        const node = document.createElement("td");
        const textNode = document.createTextNode(item[prop]);
        node.appendChild(textNode);
        row.appendChild(node);
    }
    const deleteBook = document.createElement("button");
    deleteBook.setAttribute('bookIndex',item.bookIndex);
    addDeleteFunction(deleteBook);
    deleteBook.innerHTML = "Delete Book";
    row.appendChild(deleteBook);
    libraryTable.appendChild(row);
}

const inputTitle = document.querySelector("#input-title");
const inputAuthor = document.querySelector("#input-author");
const inputPages = document.querySelector("#input-pages");
const inputRead = document.querySelector("#input-read");
const inputUnread = document.querySelector("#input-unread");
const submitBook = document.querySelector("#submit-book");

submitBook.addEventListener('click', (event) => {
    let isRead = 'No';
    if (inputRead.checked == true) {
        isRead = 'Yes';
    }
    addBook(inputTitle.value,inputAuthor.value,inputPages.value,isRead);
    displayNewBook(myLibrary);
})

function addDeleteFunction(deleteButton) {
    deleteButton.addEventListener('click', (event) => {
        //delete entry from myLibrary
        let selectedIndex = deleteButton.getAttribute('bookIndex');
        myLibrary.splice(selectedIndex, 1);
        //delete data from table
        let parent = deleteButton.parentElement;
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    })
}

function indexBooks(newBook, bookCounter) {
    newBook.bookIndex = bookCounter;
    ++bookCounter;
}


//create some sort of "updateIndex" function that gives each entry in the array an "index" property that matches its position in the array, then use that to set where to delete books from myLibrary. Otherwise, every time you delete a book, the index of all books added after it will be off by 1.