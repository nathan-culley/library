let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.table(myLibrary);
}

// addBook("The Hobbit", "J.R.R. Tolkien", 250, true);
// addBook("Dune", "Frank Herbert", 400, true);

// function displayLibrary(myLibrary) {
//     const libraryTable = document.getElementById("library-table")
//     for (let item of myLibrary) {
//         const row = document.createElement("tr");
//         console.log(item);
//         for (let prop in item) {
//             console.log(item[prop]);
//             const node = document.createElement("td");
//             const textNode = document.createTextNode(item[prop]);
//             node.appendChild(textNode);
//             row.appendChild(node);
//         }
//         libraryTable.appendChild(row);
//     }
// }

// displayLibrary(myLibrary);

function displayNewBook(myLibrary) {
    const libraryTable = document.getElementById("library-table")
    const bookIndex = new String(myLibrary.length - 1);
    const row = document.createElement("tr");
    // row.setAttribute('class',bookIndex);
    let item = myLibrary[myLibrary.length - 1];
    for (let prop in item) {
        console.log(item[prop]);
        const node = document.createElement("td");
        const textNode = document.createTextNode(item[prop]);
        node.appendChild(textNode);
        // node.setAttribute('class',bookIndex);
        row.appendChild(node);
    }
    const deleteBook = document.createElement("button");
    deleteBook.setAttribute('class',bookIndex);
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

        //delete data from table
        let parent = deleteButton.parentElement;
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    })
}