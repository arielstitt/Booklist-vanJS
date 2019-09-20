// -------------- BOOK CLASS: REPRESENTS A BOOK ------------

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// --------------- UI CLASS: HANDLES UI TASKS -------------- 

class UI {
    static displayBooks() {
        const StoredBooks = Store.getBooks();

        const books = StoredBooks;
        // loop through all the books in the array
        // call the method addBookToList in the UI class

        //pass the parameter 'book' in the method so that it can be used 
        //in the addBookToList method
        books.forEach((book) => UI.addBookToList(book))
    }
    //this addBookToList method will create a row to put into tbody
    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        //create a table row element, which has title, author, isbn, and delete button
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td>
        <a href='#' class='btn btn-danger btn-sm delete'> X </a>
        </td>
        `;
        // add the row to the list (append)
        list.appendChild(row);
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    } 

    static showAlert(message, className){
        //build div from scratch
        //insert into UI
        const div = document.createElement('div')
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        //parent element
        const container = document.querySelector('.container');
        const form = document. querySelector('#book-form');
        //insert div before the form
        container.insertBefore(div, form);

        //vanish after 3 seconds
        setTimeout(()=> document.querySelector('.alert').remove(), 3000)
    } 

    static clearFields() {
        //grab each field in the form and clear it
        // grab the id of the field and set to an empty string
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

//---------- STORE CLASS: HANDLES STORAGE-------------
class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = []
        }else {
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books; 
    }

    static addBook(book){
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}
// ---------- EVENT: DISPLAY BOOKS ------------
//when the window has loaded, 
// add the content we manually added in the UI
document.addEventListener('DOMContentLoaded', UI.displayBooks)

//----------EVENT : ADD A BOOK -------------

// collect data from the form
//listen to a submit on the form
document.querySelector('#book-form').addEventListener('submit', (e) => {
    //prevent the window from reloading during a submit
    e.preventDefault();
    // get form values
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value

    //---------- VALIDATE ----------
    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('Please fill in all fields.', 'danger')
    } else {
        // create a new instance (instantiating) of a book
        const book = new Book(title, author, isbn);

        //add book to UI
        UI.addBookToList(book);

        //add book to store
        Store.addBook(book);

        UI.showAlert("Book Added Successfully", "success")
        //clear fields 
        UI.clearFields()
    } 

});


// ------------ EVENT: REMOVE A BOOK ------------- // 

document.querySelector('#book-list').addEventListener('click', (e) => {
    // remove book from UI
    UI.deleteBook(e.target)

    // remove book from store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    //show delete message
    UI.showAlert("Book removed", 'success')
})