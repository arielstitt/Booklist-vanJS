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
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '123456789'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '987654321'
            }
        ];
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

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
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

// ---------- EVENT: DISPLAY BOOKS ------------
//when the window has loaded, 
// add the content we manually added in the UI
document.addEventListener('DOMContentLoaded', UI.displayBooks)

//----------EVENT : ADD A BOOK -------------

// collect data from the form
//listen to a submit on the form
document.querySelector('#book-form').addEventListener('submit', (e) => {
    //     // //prevent the window from reloading during a submit
    e.preventDefault();
    // get form values
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value

    // create a new instance (instantiating) of a book
    const book = new Book(title, author, isbn);

    //add book to UI
    UI.addBookToList(book);

    //delete book


    //clear fields 
     UI.clearFields()
});

// call add to list method

// ------------ EVENT: REMOVE A BOOK ------------- // 

document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)
})