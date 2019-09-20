// Book Class: represents a book
console.log('linked!')
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI Class: handle UI tasks

class UI {
    static diplayBooks(){
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
        books.forEach((book)=>{UI.addBookToList(book)})
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
            <a href='#' 
            class='btn btn-danger btn-sm delete'> X </a>'
        </td>
        `;
        // add the row to the list (append)
        list.appendChild(row)
    }
}

// Store Class: Handles storage

// Event: Display books

//when the window has loaded, 
// add the content we manually added in the UI
document.addEventListener('DOMContentLoaded', UI.displayBooks)

//Event: Add a book

// Event: Remove a book