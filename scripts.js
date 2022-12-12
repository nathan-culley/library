let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
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

/* function info(bookTitle) {
    if (bookTitle.read == false) {
        let readMessage = "not read yet.";
    }
    else {
        let readMessage = "already read.";
    }

    let message = bookTitle.title + " " + "by " + bookTitle.author + ", " + pages + " pages, " + readMessage;
    return message;
} */

function addBooktoLibrary(newBook, title, author, pages) {
    newBook = new Book(title, author, pages);
    console.log(newBook);    
}