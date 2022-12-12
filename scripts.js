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

function displayLibrary(myLibrary) {
    const library = document.getElementById("library-list");
    for (let item of myLibrary) {
        const node = document.createElement("li");
        console.log(item.info());
        const textNode = document.createTextNode(item.info());
        node.appendChild(textNode);
        library.appendChild(node);
    }
}