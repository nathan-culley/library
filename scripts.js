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

addBook("The Hobbit", "J.R.R. Tolkien", 250, true);
addBook("Dune", "Frank Herbert", 400, true);

function displayLibrary(myLibrary) {
    const libraryTable = document.getElementById("library-table")
    for (let item of myLibrary) {
        const row = document.createElement("tr");
        console.log(item);
        for (let prop in item) {
            console.log(item[prop]);
            const node = document.createElement("td");
            const textNode = document.createTextNode(item[prop]);
            node.appendChild(textNode);
            row.appendChild(node);
        }
        libraryTable.appendChild(row);
    }
}

displayLibrary(myLibrary);