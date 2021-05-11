'use strict'

const STORAGE_KEY = 'booksDB';
var gBooks;

_createBooks();

function removeBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage()
}

function getBooksForDisplay() {
    return gBooks
}

function _createBook(name, price) {
    return {
        id: makeId(),
        name,
        price,
        imgUrl: '',
        txt: makeLoremEn()
    }
}

function _createBooks() {
    var books = loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) {
        books = [
            {
                name: 'birthday',
                id: makeId(),
                price: '30',
                imgUrl: '',
                desc: makeLoremEn()
            },
        ]
    }
    _createBook()
    gBooks = books;
    _saveBooksToStorage();
}

function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}
