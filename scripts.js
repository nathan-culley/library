let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let readMessage;
        if (this.read == false) {
            readMessage = "not read yet.";
        }
        else {
            readMessage = "already read.";
        }
    
        let message = this.title + " " + "by " + this.author + ", " + pages + " pages, " + readMessage;
        return message;
    }
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
        libraryTable.appendChild(row);
        const titleNode = document.createElement("td");
        const titleText = document.createTextNode(item.title);
        titleNode.appendChild(titleText);
        console.log(item.title);
        const authorNode = document.createElement("td");
        const authorText = document.createTextNode(item.author);
        authorNode.appendChild(authorText);
        console.log(item.author);
        const pagesNode = document.createElement("td");
        const pagesText = document.createTextNode(item.pages);
        pagesNode.appendChild(pagesText);
        console.log(item.pages);
        const readNode = document.createElement("td");
        const readText = document.createTextNode(item.read);
        readNode.appendChild(readText);
        console.log(item.read);
        row.appendChild(titleNode);
        row.appendChild(authorNode);
        row.appendChild(pagesNode);
        row.appendChild(readNode);
        
    }
}