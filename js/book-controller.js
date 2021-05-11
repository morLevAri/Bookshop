'use strict'


function onInit() {
    renderBooks()
}

function renderBooks() {
    var books = getBooksForDisplay()
    var strHtmls = books.map(function (book) {
        return `
        <div class="book-preview">
            <span class="remove-btn" onclick="onRemoveBook('${book.id}')">X</span>
            <div class="card-body">
            <img class="book-cover-img" src="img/${book.name}.jpg" alt="">
                <h5 class="card-title">${book.name}</h5>
                <p class="card-price">Price: $${book.price}</p>
                <a href="#" onclick="onReadBook('${book.id}')">Details</a>
                <a href="#" onclick="onUpdateBook('${book.id}')">Update</a>
            </div>
        </div> 
        `
    })
    document.querySelector('.books-container').innerHTML = strHtmls.join('')
}

function onRemoveBook(bookId) {
    if (!confirm('Are you sure?')) return;
    removeBook(bookId)
    renderBooks()
}

function onUpdateBook(bookId) {
    var bookPrice = +prompt('What\'s the new price?');
    updateBook(bookId, bookPrice);
    renderBooks();
}

function onReadBook(bookId) {
    var book = getBookById(bookId)
    var elModal = document.querySelector('.modal')
    elModal.querySelector('h5').innerText = book.name
    elModal.querySelector('h6').innerText = book.price
    elModal.querySelector('p').innerText = book.desc

    elModal.hidden = false;
}

function onCloseModal() {
    document.querySelector('.modal').hidden = true
}
