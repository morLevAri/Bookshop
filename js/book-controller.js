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
                <a href="#" onclick="onReadCar('${book.imgUrl}')">Details</a>
                <a href="#" onclick="onUpdateCar('${book.desc}')">Update</a>
            </div>
        </div> 
        `
    })
    document.querySelector('.book-container').innerHTML = strHtmls.join('')
}

function onRemoveBook(bookId) {
    if (!confirm('Are you sure?')) return;
    removeBook(bookId)
    renderBooks()
}
