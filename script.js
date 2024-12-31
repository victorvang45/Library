const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



const bookTest = new Book('123', 'victor', 12, true)
myLibrary.push(bookTest);


// Toggling Read Button



// Delete book card
const deleteButtons = document.querySelectorAll('.delete-btn');
console.log(deleteButtons);

deleteButtons.forEach((deleteBook) => {
    deleteBook.addEventListener('click', () => {
        deleteBook.closest('.book-card')?.remove();
    });
});


// Handling Modal Element
const open = document.getElementById('add-book');
const modal_container = document.getElementById('modal-container');
const submit = document.getElementById('submit-book');
const form = document.querySelector("#book_form");


// Open Modal
open.addEventListener('click', () => {
    modal_container.style.display = "flex"
});

// Close Modal
window.onclick = function (e) {
    if (e.target == modal_container) {
        modal_container.style.display = "none";
    }
}


function checkBoxState() {
    const checkbox = document.getElementById("readCheckBox");

    let checked = false;

    if (checkbox.checked) {
        // Checkbox is checked (true)
        checked = true;
    }
    return checked;
}

function createBookCard(Book) {
    const example = document.createElement('div');
    example.className = 'book-card'

    // Create child elements
    const bookTitle = document.createElement('h2');
    bookTitle.textContent = Book.title;

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = Book.author;

    const bookPages = document.createElement('p');
    bookPages.textContent = Book.pages + ' pages';

    const bookButtonContainer = document.createElement('div');
    bookButtonContainer.className = 'toggle';
    const bookRead = document.createElement('button');
    bookRead.className = 'toggle-read';
    bookRead.textContent = 'Read';
    const bookRemove = document.createElement('button');
    bookRemove.className = 'delete-btn';
    bookRemove.textContent = 'Delete';



    const container = document.getElementById('book-display');
    container.appendChild(example);

    example.appendChild(bookTitle);
    example.appendChild(bookAuthor);
    example.appendChild(bookPages);
    example.appendChild(bookButtonContainer);

    bookButtonContainer.appendChild(bookRead);
    bookButtonContainer.appendChild(bookRemove);

    bookRemove.addEventListener('click', () => {
        bookRemove.closest('.book-card')?.remove();
    });

}


// Submit Button 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const tempObj = Array.from(document.querySelectorAll('#book_form input')).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
    console.log(tempObj);
    console.log("Book OBJ");
    const book = new Book(tempObj.title, tempObj.author, tempObj.pages, checkBoxState());
    console.log(book);
    modal_container.classList.remove('show');
    createBookCard(book);

    myLibrary.push(book);
    console.log(myLibrary);
    modal_container.style.display = "none";


});




