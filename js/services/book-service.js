'use strict'

const STORAGE_KEY = 'booksDB';
const PAGE_SIZE = 4;
var gBooks;
var maxRate = 10;
var gSortBy = 'created'
var gPageIdx = 0;

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

function sortBooks(books) {
    books = gBooks.sort(function (book1, book2) {
        if (gSortBy === 'created') {
            return book2.createdAt - book1.createdAt;
        }
        if (gSortBy === 'rate') {
            return book2.rate - book1.rate;
        }
        if (gSortBy === 'name') {
            if (book1.name.toLowerCase() > book2.name.toLowerCase()) return 1;
            if (book1.name.toLowerCase() < book2.name.toLowerCase()) return -1;
            return 0
        }
        if (gSortBy === 'price') {
            return book1.price - book2.price
        }
    })
    return books
}

function removeBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage()
}

function getBooksForDisplay() {
    var fromIdx = gPageIdx * PAGE_SIZE;
    return gBooks.slice(fromIdx, fromIdx + PAGE_SIZE)

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
    if (isNaN(bookPrice)) {
        alert('Please enter a number')
        return;
    }
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

function setSort(sortBy) {
    gSortBy = sortBy;
}

function _createBook(name, price, rate) {
    return {
        id: makeId(),
        name,
        price,
        rate,
        desc: makeLoremEn(),
        createdAt: Date.now(),
    }
}

function _createBooks() {
    var books = loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) {
        books = [];
        books.push(_createBook('felon', 33, 5));
        books.push(_createBook('the factory', 15, 10));
        books.push(_createBook('white flights', 26, 3));
        books.push(_createBook('afternoon of a faun', 40, 10));
        books.push(_createBook('birthday', 13, 4));
        books.push(_createBook('dominicana', 22, 2));
        books.push(_createBook('flash count diary', 30, 9));
        books.push(_createBook('hot cold heavy light', 14, 7));
        books.push(_createBook('muscle', 19, 8));
        books.push(_createBook('tears of the truffle pig', 35, 6));
        books.push(_createBook('the organs of sense', 16, 9));
        books.push(_createBook('the unwanted', 25, 8));

    }
    gBooks = books;
    _saveBooksToStorage();
}
function previousPage() {
    if (gPageIdx === 0) gPageIdx = parseInt(gBooks.length / PAGE_SIZE)
    gPageIdx--;
}

function nextPage() {
    gPageIdx++;
    if (gPageIdx * PAGE_SIZE >= gBooks.length) gPageIdx = 0;
}

function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}
