// Book Class: represents a book
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
    }
}

// Store Class: Handles storage

// Event: Display books

//Event: Add a book

// Event: Remove a book