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

function getBookById(bookId) {
    var book = gBooks.find(function (book) {
        return bookId === book.id
    })
    return book
}

function updateBook(bookId, bookPrice) {
    var book = gBooks.find(function (book) {
        return book.id === bookId;
    })
    book.price = bookPrice;
    _saveBooksToStorage();
}

function _createBook(name, autor, price) {
    return {
        id: makeId(),
        name,
        autor,
        price,
        imgUrl: '',
        desc: makeLoremEn()
    }
}

function _createBooks() {
    var books = loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) {
        books = [
            {
                id: makeId(),
                name: 'birthday',
                price: '30',
                imgUrl: '',
                desc: makeLoremEn()
            },
        ]
    }
    gBooks = books;
    _saveBooksToStorage();
}

function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}
