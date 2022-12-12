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
    const row = document.createElement("tr")
    let item = myLibrary[myLibrary.length - 1];
    for (let prop in item) {
        console.log(item[prop]);
        const node = document.createElement("td");
        const textNode = document.createTextNode(item[prop]);
        node.appendChild(textNode);
        row.appendChild(node);
    }
    const deleteBook = document.createElement("button");
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

// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. You will most likely encounter an issue where submitting your form will not do what you expect it to do. That’s because the submit input tries to send the data to a server by default. If you’ve done the bonus section for the calculator assignment, you might be familiar with event.preventDefault();. Read up on the event.preventDefault documentation again and see how you can solve this issue!