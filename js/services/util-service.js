'use strict'

function makeId(length = 4) {
    var txt = ' ';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function removeSwal(id) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            removeTodo(id)
            renderTodos();
        }
    })
}

// getFormattedTime(Date.now());

function getFormattedTime(ts) {
    var d = new Date(ts);
    var hours = (d.getHours() > 9) ? d.getHours() : '0' + d.getHours();
    var minutes = (d.getMinutes() > 9) ? d.getMinutes() : '0' + d.getMinutes();
    return `${d.getDate()}/${d.getMonth() + 1}, ${hours}:${minutes}`
}


function makeLoremEn(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', ',', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function makeLoremHe(size = 100) {
    var words = ['גומיה', 'נוף', ',', 'מדוע', 'חוץ מזה', 'יום אחד', 'ביצה', 'כבכל יום', 'מעניין', 'רציני', '.', 'כביכול', 'בננה', 'כאשר', 'ביחד', 'ליד', 'על', 'מי', 'למה', 'אריה', 'מיוחד', 'מוזר', 'אבוקדו', 'כפר', 'לעוף', 'אבל', 'לכן'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function getRandomIntExclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
