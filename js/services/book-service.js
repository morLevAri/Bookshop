'use strict'

const STORAGE_KEY = 'booksDB';
var gBooks;
var maxRate = 10;

_createBooks();

function addBook(name, price) {
    var book = _createBook(name)
    if (isNaN(price)) {
        alert('Please enter a number')
        return;
    }
    book.price = price;
    gBooks.unshift(book)
    _saveBooksToStorage();
}

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

function rate(bookId, direction) {
    var book = gBooks.find(function (book) {
        return book.id === bookId;
    })
    if (direction === 'up' && book.rate < maxRate) {
        book.rate++
    }
    if (direction === 'down' && book.rate > 0) {
        book.rate--
    }
    _saveBooksToStorage();
}

function _createBook(name, price) {
    return {
        id: makeId(),
        name,
        price,
        rate: 0,
        desc: makeLoremEn()
    }
}

function _createBooks() {
    var books = loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) {
        books = [];
        books.push(_createBook('felon', 33));
        books.push(_createBook('the factory', 15));
        books.push(_createBook('white flights', 26));
        books.push(_createBook('afternoon of a faun', 40));
        books.push(_createBook('birthday', 13));
        books.push(_createBook('dominicana', 22));
        books.push(_createBook('flash count diary', 30));
        books.push(_createBook('hot cold heavy light', 14));
        books.push(_createBook('muscle', 19));
        books.push(_createBook('tears of the truffle pig', 35));
        books.push(_createBook('the organs of sense', 16));
        books.push(_createBook('the unwanted', 25));
    }
    gBooks = books;
    _saveBooksToStorage();
}

function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}
