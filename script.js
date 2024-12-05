const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.checkRead = function() {
    this.checkRead = function() {
        if (this.read === true) {
            return 'read';
        }
        else {
            return 'not read yet';
        }
    }
}

Book.prototype.Info = function() {
    return this.title + ', by ' + this.author, + ', ' + this.pages + ' pages, ' + this.checkRead(); 
}